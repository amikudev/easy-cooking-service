import { LanguageEnum } from '../models/user/language.enum';
import { DbTablesEnum } from '../models/dbTables/DbTables.enum';

const pregnencyRegimeCollections: string[] = [];

pregnencyRegimeCollections[LanguageEnum.ENGLISH] =
  'motherPregnencyRegimeEnglish';
pregnencyRegimeCollections[LanguageEnum.HINDI] = 'motherPregnencyRegimeHindi';
pregnencyRegimeCollections[LanguageEnum.MARATHI] =
  'motherPregnencyRegimeMarathi';

export const getPregnencyRegimeCollection = (language: LanguageEnum) => {
  return pregnencyRegimeCollections[language];
};

const assetCollections: string[] = [];

assetCollections[LanguageEnum.ENGLISH] = 'assetsEnglish';
assetCollections[LanguageEnum.HINDI] = 'assetsHindi';
assetCollections[LanguageEnum.MARATHI] = 'assetsMarathi';

export const getAssetsCollection = (language: LanguageEnum) => {
  return assetCollections[language];
};
