import { AssetTypeEnum } from "./AssetType.enum";
import { AssetInterface } from "./Asset.interface";

export interface TextQuestionInterface extends AssetInterface {
  question: string;
  answer: string;
}
