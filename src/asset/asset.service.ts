import { Body, Injectable, Query } from '@nestjs/common';
import { AssetDto } from './asset.dto';
import { getAssetsCollection } from '../utils/getPregnencyRegimeCollection';
import { LanguageEnum } from '../models/user/language.enum';
import { AssetModel } from '../models/assets/Asset.model';
import { AssetLocationDto } from '../models/dto/AssetLocationDto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AssetService {
  constructor(private assetDto: AssetDto) {}

  async getAssets(
    @Query() assetLocationDto: AssetLocationDto,
  ): Promise<AssetModel[]> {
    return this.assetDto.getAssets(assetLocationDto);
  }

  async createAssets(
    newAssets: AssetModel[],
    assetLocationDto: AssetLocationDto,
  ): Promise<AssetModel[]> {
    //fetch assets located at this location
    let assets = await this.getAssets(assetLocationDto);

    //create new uid's for each of the new assets.
    newAssets.forEach(asset => (asset.uid = uuidv4()));

    //append new assets at the end of older assets.
    assets = assets.concat(newAssets);

    //save the full record and return the result
    return this.assetDto.createAssets(assets, assetLocationDto);
  }
}
