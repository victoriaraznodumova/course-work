import { Category } from 'src/categories/category.entity';
import { Customer } from 'src/customers/customer.entity';
import { Feedback } from 'src/feedbacks/feedback.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  customer_id: number;
  @Column()
  category_id: number;
  @Column()
  order_date: Date; 
  @ManyToOne((type) => Customer, (customer) => customer.id)
  @JoinColumn([
    {name: 'customer_id', referencedColumnName: "id"} ,
   ])
  customers: Customer[];



  @ManyToOne((type) => Category, (category) => category.id)
  @JoinTable({
    //join таблица 
    name: 'order_category',
    joinColumn: { name: 'order_id' }, 
    inverseJoinColumn: {name: 'category_id'}
  })
  category: Category;



  @OneToOne((type) => Feedback, (feedback) => feedback.id) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  @JoinTable({
    //join таблица с названием author_article
    name: 'feedback_order',
    joinColumn: { name: 'order_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'feedback_id' }, //для связи с идентификатором статьи
  })
  feedbacks: Feedback; //объект, в котором будем автоматически получать все статьи автора
  


}


// {name: 'customer_id', referencedColumnName: "surname"},
// {name: 'customer_id', referencedColumnName: "phone_number"}