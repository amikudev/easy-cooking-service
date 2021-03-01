import {
  Body,
  Controller, Get,
  Post, Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ActivityScreenInfo } from '../models/activity/ActivityScreenInfo';
import { ActivityService } from './activity.service';
import { LanguageEnum } from '../models/user/language.enum';
import { GetRecipeFilterDto } from '../recipe/dto/get-recipe-filter.dto';
import { RecipeModel } from '../recipe/schema/recipe.schema';
import { AssetLocationDto } from '../models/dto/AssetLocationDto';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {
  }

  @Get()
  getActivity(@Query() filterDto: AssetLocationDto): Promise<ActivityScreenInfo> {
    return this.activityService.getActivity(filterDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async creatOrUpdateActivity(@Body() motherActivities: ActivityScreenInfo): Promise<ActivityScreenInfo> {
    return this.activityService.creatOrUpdateActivity(motherActivities);
  }
}
