import { Body, Injectable } from '@nestjs/common';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { RecipeModel } from '../recipe/schema/recipe.schema';
import { ActivityDto } from './activity.dto';


@Injectable()
export class ActivityService {
  constructor(private activityDto: ActivityDto) {
  }

  async creatOrUpdateActivity(motherActivities: MotherActivitiesModel): Promise<MotherActivitiesModel> {
    console.log("in activity service");
    return this.activityDto.creatOrUpdateActivity(motherActivities);
  }
}
