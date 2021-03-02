import { AssetTypeEnum } from './AssetType.enum';
import { AssetModel } from './Asset.model';

export interface TextAssetInterface extends AssetModel {
  assetUrl: string;
  assetTitle: string;
  assetDescription: string;
}
