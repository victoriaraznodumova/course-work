import { Module } from '@nestjs/common';
import { FeedbacksDatasourceService } from './feedbacksdatasource.service';

@Module({
  providers: [FeedbacksDatasourceService], 
  exports: [FeedbacksDatasourceService], 
})

export class FeedbacksDatasourceModule {}
