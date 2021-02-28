import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityDto } from './activity.dto';
import { AssetDto } from './asset/asset.dto';
import { AssetService } from './asset/asset.service';
import { AssetController } from './asset/asset.controller';

@Module({
  controllers: [ActivityController, AssetController],
  providers: [ActivityService, ActivityDto, AssetDto, AssetService]
})
export class ActivityModule {}
