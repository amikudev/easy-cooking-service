import { Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityDto } from './activity.dto';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, ActivityDto]
})
export class ActivityModule {}
