import { Injectable } from '@nestjs/common';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { RecipeModel } from '../recipe/schema/recipe.schema';
import { v4 as uuidv4 } from 'uuid';

import {db} from '../../firebase';
import { getPregnencyRegimeCollection } from '../utils/getPregnencyRegimeCollection';
import { LanguageEnum } from '../models/user/language.enum';

@Injectable()
export class ActivityDto {

  async creatOrUpdateActivity(motherActivities: MotherActivitiesModel, collectionName: string): Promise<MotherActivitiesModel> {
    console.log("in activity dto");
    console.log("collectionName: " + collectionName);

    //if id is not there, generate the id
    if(!motherActivities.uid) {
      motherActivities.uid = uuidv4();
    }

    const result: FirebaseFirestore.WriteResult = await db.collection(collectionName).doc(motherActivities.uid).set(motherActivities);
    console.log(result);
    return Promise.resolve(motherActivities);
  }
}
