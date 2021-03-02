import { Body, Injectable, Query } from '@nestjs/common';

import {db} from '../../firebase';
import { getPregnencyRegimeCollection } from '../utils/getPregnencyRegimeCollection';
import { LanguageEnum } from '../models/user/language.enum';
import { AssetModel } from '../models/assets/Asset.model';
import { AssetLocationDto } from '../models/dto/AssetLocationDto';

@Injectable()
export class AssetDto {

  async getAssets(@Query() assetLocationDto: AssetLocationDto): Promise<AssetModel[]> {
    const ref = db.collection('regime').doc(assetLocationDto.getPath());
    const doc = await ref.get();
    if (!doc.exists) {
      return [];
    } else {
      return doc.data().assets as AssetModel[];
    }
  }

  async createAssets(@Body() assets: AssetModel[], @Body() assetLocationDto: AssetLocationDto): Promise<AssetModel[]> {
    const result: FirebaseFirestore.WriteResult = await db.collection('regime').doc(assetLocationDto.getPath()).set({assets: assets});
    return Promise.resolve(assets);
  }
}
