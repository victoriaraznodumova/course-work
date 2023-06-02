import { Module } from '@nestjs/common';
import { OrdersDatasourceService } from './ordersdatasource.service';

@Module({
  providers: [OrdersDatasourceService], 
  exports: [OrdersDatasourceService], 
})

export class OrdersDatasourceModule {}
