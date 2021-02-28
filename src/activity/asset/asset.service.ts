import { Injectable } from '@nestjs/common';
import { AssetDto } from './asset.dto';
import { getAssetsCollection } from '../../utils/getPregnencyRegimeCollection';
import { LanguageEnum } from '../../models/user/language.enum';
import { AssetModel } from '../../models/assets/Asset.model';

@Injectable()
export class AssetService {
  constructor(private assetDto: AssetDto) {
  }

  getAsset(assetId: string): Promise<AssetModel | string> {
    return this.assetDto.getAsset(assetId, getAssetsCollection(LanguageEnum.ENGLISH));
  }
}
