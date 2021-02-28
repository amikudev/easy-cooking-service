import { AssetTypeEnum } from "./AssetType.enum";
import {IsNotEmpty, IsArray} from "class-validator";

export class AssetModel {
  uid: string | null | undefined;

  @IsNotEmpty()
  assetType: AssetTypeEnum;

  @IsArray()
  tags: string[];

  createTimestamp: Date;

  @IsNotEmpty()
  createdByUserUid: string;
  //todo: update timestamp and user

  comments: string; // this will be shown to admin team only and is only
  // for internal use.
}
