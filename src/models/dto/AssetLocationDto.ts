import { ActivityTypeEnum } from '../activity/ActivityType.enum';

export class AssetLocationDto {
  constructor(
    public motherActivityId: ActivityTypeEnum,
    public timePeriod: string,
    public collectionName,
  ) {}

  getPath() {
    return (
      this.collectionName + '/' + this.timePeriod + '/' + this.motherActivityId
    );
  }
}
