import { ActivityTypeEnum } from '../activity/ActivityType.enum';

export class ActivitySearchDto {

  constructor(public motherActivityId: ActivityTypeEnum, public timePeriod: string) {
  }

}
