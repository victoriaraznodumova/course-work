import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [
    CustomersModule, 
    OrdersModule,
    CategoriesModule,
    FeedbacksModule,
    DatasourceModule, 
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      database: 'education',
      username: 'postgres', //имя пользователя
      password: 'postgres', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),

  ],
})
export class AppModule {}

