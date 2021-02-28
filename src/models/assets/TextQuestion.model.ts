import { AssetTypeEnum } from "./AssetType.enum";
import { AssetModel } from "./Asset.model";

export interface TextQuestionModel extends AssetModel {
  question: string;
  answer: string;
}
