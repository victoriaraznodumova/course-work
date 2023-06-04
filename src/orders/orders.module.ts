import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/customer.entity';
import { Order } from 'src/orders/order.entity';
import { Feedback } from 'src/feedbacks/feedback.entity';
import { OrdersDatasourceModule } from 'src/datasource/ordersdatasource.module';
import { Category } from 'src/categories/category.entity';



@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [OrdersDatasourceModule,
      TypeOrmModule.forFeature([Feedback, Order, Category, Customer]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
    ],
  })
  export class OrdersModule {}
  


