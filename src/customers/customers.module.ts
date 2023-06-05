import { Module } from '@nestjs/common';
import { Customer } from './customer.entity'
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/feedbacks/feedback.entity';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Customer, Feedback]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class CustomersModule {}