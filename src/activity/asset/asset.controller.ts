import {
  Body,
  Controller,
  Get,
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

  @Get()
  async getAsset(): Promise<AssetModel | string> {
    const assetId = "c8a59427-40bd-4c87-9ba8-df79263def03";
    return this.assetService.getAsset(assetId);
  }
}
