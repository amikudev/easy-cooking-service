import { Module } from '@nestjs/common';
import { AssetDto } from './asset.dto';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';

@Module({
  controllers: [AssetController],
  providers: [AssetDto, AssetService],
  imports: [AssetModule]
})
export class AssetModule {}
