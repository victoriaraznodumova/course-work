import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/customer.entity';
import { Feedback } from 'src/feedbacks/feedback.entity';
import { Order } from 'src/orders/order.entity';



@Module({
    controllers: [FeedbacksController],
    providers: [FeedbacksService],
    imports: [
      TypeOrmModule.forFeature([Customer, Feedback, Order]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
    ],
  })
  export class FeedbacksModule {}
  


