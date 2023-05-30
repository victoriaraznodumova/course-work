import { Customer } from 'src/customers/customer.entity';
import { Order } from 'src/orders/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feedbacks') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Feedback {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  order_id: number;
  @Column()
  customer_id: number;
  @Column()
  feedback_date: Date;
  @Column()
  feedback: string;

  
  @OneToOne((type) => Order, (order) => order.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием author_article
    name: 'feedback_order',
    joinColumn: { name: 'feedback_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'order_id' }, //для связи с идентификатором статьи
  })
  orders: Order; //объект, в котором будем автоматически получать все статьи автора
  
//   @ManyToOne((type) => Customer, (customer) => customer.customer_id) //тоже самое для аффилиаций
//   @JoinTable({
//     name: 'feedback_customer',
//     joinColumn: { name: 'feedback_id' },
//     inverseJoinColumn: { name: 'customer_id' },
//   })
//   customers: Customer;
}
