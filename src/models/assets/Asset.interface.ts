import { AssetTypeEnum } from "./AssetType.enum";

export interface AssetInterface {
  uid: string | null | undefined;
  assetType: AssetTypeEnum;

  tags: string[];
  createTimestamp: Date;
  createdByUserUid: string;
  //todo: update timestamp and user
  comments: string; // this will be shown to admin team only and is only
  // for internal use.
}
