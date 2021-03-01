import { Body, Injectable, Query } from '@nestjs/common';
import { ActivityScreenInfo } from '../../models/activity/ActivityScreenInfo';
import { RecipeModel } from '../../recipe/schema/recipe.schema';
import { v4 as uuidv4 } from 'uuid';

import {db} from '../../../firebase';
import { getPregnencyRegimeCollection } from '../../utils/getPregnencyRegimeCollection';
import { LanguageEnum } from '../../models/user/language.enum';
import { AssetModel } from '../../models/assets/Asset.model';
import { AssetLocationDto } from '../../models/dto/AssetLocationDto';

@Injectable()
export class AssetDto {

  async creatAsset(asset: AssetModel, assetCollection: string): Promise<string> {
    //uid will definitely be null as it is a create asset method
    asset.uid = uuidv4();

    const result: FirebaseFirestore.WriteResult = await db.collection(assetCollection).doc(asset.uid).set(asset);
    return Promise.resolve(asset.uid);
  }

  async getAsset(assetId: string, assetCollection: string): Promise<AssetModel | string> {
    const ref = db.collection(assetCollection).doc(assetId);
    const doc = await ref.get();
    if (!doc.exists) {
      return "This asset does not exists in the documents collection";
    } else {
      return doc.data() as AssetModel;
    }
  }

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
