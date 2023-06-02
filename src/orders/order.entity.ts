import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/category.entity';
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
  

  @ApiProperty({example: '1', description: 'Номер категории фотосессии'})
  @Column()
  category_id: number;

  
//  @ManyToOne((type) => Category, (category) => category.orders)
//   @JoinColumn(name = "order_date",
//     //join таблица 
//     referencedColumnName = "name")
//   // @JoinTable()
//   // category: Category;


  @ApiProperty({example: 'false', description: 'Статус заказа'})
  @Column()
  is_done: boolean; 
}