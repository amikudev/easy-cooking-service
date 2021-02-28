import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Recipe } from '../recipe/recipe.model';
import { RecipeModel } from '../recipe/schema/recipe.schema';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { ActivityService } from './activity.service';

@Controller('admin/motherActivity')
export class ActivityController {
  constructor(private activityService: ActivityService) {
  }

  // @UsePipes(ValidationPipe)
  @Post()
  async creatOrUpdateActivity(@Body() motherActivities: MotherActivitiesModel): Promise<MotherActivitiesModel> {
    console.log(motherActivities);
    return this.activityService.creatOrUpdateActivity(motherActivities);
  }
}
