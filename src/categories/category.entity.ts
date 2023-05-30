import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Category {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;
  @Column()
  price: number;
  @OneToMany(() => Order, (order) => order.category_id)
    @JoinTable({
      //join таблица 
      name: 'order_category',
      joinColumn: { name: 'category_id' }, 
      inverseJoinColumn: {name: 'order_id'}
    })
    orders: Order[]




}
