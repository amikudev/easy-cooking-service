import { Injectable } from '@nestjs/common';
import { MotherActivitiesModel } from '../models/activity/MotherActivities.model';
import { RecipeModel } from '../recipe/schema/recipe.schema';

import {db} from '../../firebase';

@Injectable()
export class ActivityDto {

  async creatOrUpdateActivity(motherActivities: MotherActivitiesModel): Promise<MotherActivitiesModel> {
    console.log("in activity dto");
    const result = await db.collection('test').doc("id1").set(motherActivities);
    console.log(result);
    return Promise.resolve(motherActivities);
  }
}
