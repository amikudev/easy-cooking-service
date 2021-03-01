import {
  Body,
  Controller,
  Get, Param, Post, Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AssetModel } from '../../models/assets/Asset.model';
import { ActivityService } from '../activity.service';
import { AssetService } from './asset.service';
import { AssetLocationDto } from '../../models/dto/AssetLocationDto';
import { ActivityScreenInfo } from '../../models/activity/ActivityScreenInfo';
import { filter } from 'rxjs/operators';

@Controller('asset')
export class AssetController {
  constructor(private assetService: AssetService) {
  }

  @Get(':assetId')
  async getAsset(@Param() params): Promise<AssetModel | string> {
    return this.assetService.getAsset(params.assetId);
  }

  @Get()
  async getAssets(@Query() assetLocDto: AssetLocationDto): Promise<AssetModel[]> {
    //transforming it to class object so that the methods that class methods
    // are available on this instance
    const assetLocationDto = new AssetLocationDto(assetLocDto.motherActivityId, assetLocDto.timePeriod, assetLocDto.collectionName)
    return this.assetService.getAssets(assetLocationDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createAssets(@Body("assets") assets: AssetModel[], @Body('assetLocDto') assetLocDto: AssetLocationDto): Promise<AssetModel[]> {
    //transforming it to class object so that the methods that class methods
    // are available on this instance
    const assetLocationDto = new AssetLocationDto(assetLocDto.motherActivityId, assetLocDto.timePeriod, assetLocDto.collectionName)
    return this.assetService.createAssets(assets, assetLocationDto);
  }

}
