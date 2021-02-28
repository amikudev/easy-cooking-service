import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { ActivityService } from './activity.service';
import { LanguageEnum } from '../models/user/language.enum';

@Controller('admin/motherActivity')
export class ActivityController {
  constructor(private activityService: ActivityService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  async creatOrUpdateActivity(@Body() motherActivities: MotherActivitiesModel): Promise<MotherActivitiesModel> {
    return this.activityService.creatOrUpdateActivity(motherActivities);
  }
}
