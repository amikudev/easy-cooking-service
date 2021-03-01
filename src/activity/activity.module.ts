import { Module } from '@nestjs/common';
import { AssetDto } from './asset/asset.dto';
import { AssetService } from './asset/asset.service';
import { AssetController } from './asset/asset.controller';

@Module({
  controllers: [AssetController],
  providers: [AssetDto, AssetService]
})
export class ActivityModule {}
