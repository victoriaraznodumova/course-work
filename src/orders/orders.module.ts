import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customers/customer.entity';
import { Order } from 'src/orders/order.entity';



@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [
      TypeOrmModule.forFeature([Customer, Order]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
    ],
  })
  export class OrdersModule {}
  


