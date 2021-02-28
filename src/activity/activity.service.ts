import { Body, Injectable } from '@nestjs/common';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { RecipeModel } from '../recipe/schema/recipe.schema';
import { ActivityDto } from './activity.dto';
import { LanguageEnum } from '../models/user/language.enum';
import {
  getAssetsCollection,
  getPregnencyRegimeCollection,
} from '../utils/getPregnencyRegimeCollection';
import { AssetModel } from '../models/assets/Asset.model';
import { AssetDto } from './asset/asset.dto';


@Injectable()
export class ActivityService {
  constructor(private activityDto: ActivityDto, private assetDto: AssetDto) {
  }

  async creatOrUpdateActivity(motherActivities: MotherActivitiesModel): Promise<MotherActivitiesModel> {
    console.log("in activity service");
    const language = LanguageEnum.ENGLISH;

    //convert the required assets to assetId's, save any unsaved assets
    const assetIdList: string[] = [];
    for(let i=0; i<motherActivities.assets.length; i++) {
      const asset: AssetModel = motherActivities.assets[i] as AssetModel;
      if(asset.uid) {
        assetIdList.push(asset.uid);
      }
      else {
        const assetId = await this.assetDto.creatAsset(asset, getAssetsCollection(language));
        assetIdList.push(assetId);
      }
    }
    motherActivities.assets = assetIdList;

    return this.activityDto.creatOrUpdateActivity(motherActivities, getPregnencyRegimeCollection(language));
  }
}
