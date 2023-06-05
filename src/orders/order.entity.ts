import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/category.entity';
import { Customer } from 'src/customers/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('orders')
export class Order {
  
  @ApiProperty({example: '1', description: 'Номер заказа'})
  @PrimaryGeneratedColumn()
  id: number;


  @ApiProperty({example: '"2023-05-11"', description: 'Желаемая дата фотосессии'})
  @Column()
  order_date: Date; 
  

  @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Комментарий заказчика к желаемой фотосессии'})
  @Column({name: 'comment', type: 'text'})
  comment: string;
  nullable: true;

  
  @ApiProperty({example: 'false', description: 'Статус заказа'})
  @Column()
  is_done: boolean; 


  
  @ManyToOne(() => Category, (category) => category.orders)
  @JoinColumn({ name: "category", referencedColumnName: "category_id" })
  category: Category;


  
  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: "customer", referencedColumnName: "fullname" })
  customer: Customer;
}