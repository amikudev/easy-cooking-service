import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityDto } from './activity.dto';
import { AssetDto } from './asset/asset.dto';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, ActivityDto, AssetDto]
})
export class ActivityModule {}
