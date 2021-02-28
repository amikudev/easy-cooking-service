import {
  Body,
  Controller,
  Get, Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AssetModel } from '../../models/assets/Asset.model';
import { ActivityService } from '../activity.service';
import { AssetService } from './asset.service';

@Controller('asset')
export class AssetController {
  constructor(private assetService: AssetService) {
  }

  @Get(':assetId')
  async getAsset(@Param() params): Promise<AssetModel | string> {
    return this.assetService.getAsset(params.assetId);
  }
}
