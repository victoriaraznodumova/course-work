import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/customer.entity';

@Injectable()
export class DatasourceService {
  private customers: Customer[] = [];

  getCustomers(): Customer[] {
    return this.customers;
  }
}