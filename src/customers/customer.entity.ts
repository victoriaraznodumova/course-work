import { ApiProperty } from '@nestjs/swagger';
import { Feedback } from 'src/feedbacks/feedback.entity';
import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('customers') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Customer {

  // @ApiProperty({ description: 'Номер заказчика'})
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;


  @ApiProperty({example: 'Иван Иванов', description: 'Полное имя пользователя'})
  @Column({name: 'fullname', type: 'text'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
 

  @ApiProperty({example: '24', description: 'Возраст пользователя'})
  @Column({name: 'age', type: 'text'})
  age: number;


  @ApiProperty({example: 'abc@gmail.com', description: 'Электронная почта пользователя'})
  @Column({name: 'email', type: 'text'})
  email: string;


  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[]


  @OneToMany(() => Feedback, (feedback) => feedback.customer)
  feedbacks: Feedback[]
}