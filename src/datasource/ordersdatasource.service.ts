import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/order.entity';

@Injectable()
export class OrdersDatasourceService {
  private orders: Order[] = [];
  
  getOrders(): Order[] {
    return this.orders;
  }
}