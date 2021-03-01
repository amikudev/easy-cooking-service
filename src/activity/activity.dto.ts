import { Injectable } from '@nestjs/common';
import { ActivityScreenInfo } from '../models/activity/ActivityScreenInfo';
import { v4 as uuidv4 } from 'uuid';

import {db} from '../../firebase';
import { AssetLocationDto } from '../models/dto/AssetLocationDto';

@Injectable()
export class ActivityDto {

  //returns an empty array if 0 activities are found. return all entries
  // found with filter critaria
  async getActivity(filterDto: AssetLocationDto, collectionName: string): Promise<ActivityScreenInfo[]> {
    //todo: get the object in a filtered way.
    const docRef = db.collection(collectionName);
    const snapshot = await docRef.where('motherActivityId', '==', filterDto.motherActivityId)
      .where('timePeriod', '==', filterDto.timePeriod).get();

    const motherActivities: ActivityScreenInfo[] = [];
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      motherActivities.push(doc.data() as ActivityScreenInfo);
    });

    return Promise.resolve(motherActivities);
  }

  async creatOrUpdateActivity(motherActivities: ActivityScreenInfo, collectionName: string): Promise<ActivityScreenInfo> {
    console.log("in activity dto");
    console.log("collectionName: " + collectionName);

    //if id is not there, generate the id
    if(!motherActivities.uid) {
      motherActivities.uid = uuidv4();
    }

    const result: FirebaseFirestore.WriteResult = await db.collection(collectionName).doc(motherActivities.uid).set(motherActivities);
    console.log(result);
    const result1: FirebaseFirestore.WriteResult = await db.collection(collectionName).doc(motherActivities.timePeriod + "/" + motherActivities.timePeriod + "/" + motherActivities.motherActivityId).set(motherActivities);

    return Promise.resolve(motherActivities);
  }
}
