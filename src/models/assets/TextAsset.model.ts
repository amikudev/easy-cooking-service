import { AssetTypeEnum } from "./AssetType.enum";
import { AssetModel } from "./Asset.model";

export interface TextAssetModel extends AssetModel {
  assetText: string;
}
