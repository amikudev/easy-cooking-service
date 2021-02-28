import { AssetTypeEnum } from "./AssetType.enum";
import { AssetInterface } from "./Asset.interface";

export interface TextAssetInterface extends AssetInterface {
  assetUrl: string;
  assetTitle: string;
  assetDescription: string;
}
