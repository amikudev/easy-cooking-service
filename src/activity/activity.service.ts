import { Injectable } from '@nestjs/common';
import { ActivityScreenInfo } from '../models/activity/ActivityScreenInfo';
import { ActivityDto } from './activity.dto';
import { LanguageEnum } from '../models/user/language.enum';
import {
  getAssetsCollection,
  getPregnencyRegimeCollection,
} from '../utils/getPregnencyRegimeCollection';
import { AssetModel } from '../models/assets/Asset.model';
import { AssetDto } from './asset/asset.dto';
import { ActivitySearchDto } from '../models/dto/ActivitySearch.dto';
import { ActivityTypeEnum } from '../models/activity/ActivityType.enum';


@Injectable()
export class ActivityService {
  language = LanguageEnum.ENGLISH;
  constructor(private activityDto: ActivityDto, private assetDto: AssetDto) {
  }

  async getActivity(filterDto: ActivitySearchDto): Promise<ActivityScreenInfo> {
    //find the object
    const motherActivities: ActivityScreenInfo[] = await this.activityDto.getActivity(filterDto, getPregnencyRegimeCollection(this.language));

    if(motherActivities.length !== 1) {
      console.error(filterDto);
      throw Error("There should always be only one activity with this filter" +
        " criteria");
    }

    // convert the asset id's to actual assets
    const motherActivity = motherActivities[0];
    // const assets = (motherActivity.assets as string[]).map(asset => await this.assetDto.getAsset(asset, getAssetsCollection(this.language)))
    // for(let i=0; motherActivity)

    return Promise.resolve(motherActivity);
  }

  async creatOrUpdateActivity(motherActivities: ActivityScreenInfo): Promise<ActivityScreenInfo> {
    console.log("in activity service");

    //do not create if another activity is present with same filter.
    if(!motherActivities.uid) {
      const existingEntriesWithThisFilter = await this.activityDto.getActivity(new ActivitySearchDto(motherActivities.motherActivityId, motherActivities.timePeriod), getPregnencyRegimeCollection(this.language));
      if(existingEntriesWithThisFilter.length > 0) {
        console.error(motherActivities);
        throw Error("Cannot create new entry with the filter critaria" +
          " because activity already exists");
      }
    }

    //convert the required assets to assetId's, save any unsaved assets
    const assetIdList: string[] = [];
    for(let i=0; i<motherActivities.assets.length; i++) {
      const asset: AssetModel = motherActivities.assets[i] as AssetModel;
      if(asset.uid) {
        assetIdList.push(asset.uid);
      }
      else {
        const assetId = await this.assetDto.creatAsset(asset, getAssetsCollection(this.language));
        assetIdList.push(assetId);
      }
    }
    motherActivities.assets = assetIdList;

    return this.activityDto.creatOrUpdateActivity(motherActivities, getPregnencyRegimeCollection(this.language));
  }
}
