import { Injectable } from '@nestjs/common';
import { Feedback } from 'src/feedbacks/feedback.entity';

@Injectable()
export class FeedbacksDatasourceService {
  private feedbacks: Feedback[] = [];
  getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }
}