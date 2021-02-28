import { AssetTypeEnum } from "./AssetType.enum";
import { AssetInterface } from "./Asset.interface";

export interface TextAssetInterface extends AssetInterface {
  assetText: string;
}
