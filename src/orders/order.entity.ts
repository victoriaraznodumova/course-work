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
  

  // @ApiProperty({example: '1', description: 'Номер категории фотосессии'})
  // @Column({name: 'category', type: 'int'})
  // category: number;

  @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Комментарий заказчика к желаемой фотосессии'})
  @Column({name: 'comment', type: 'text'})
  comment: string;
  nullable: true;

  
//  @ManyToOne((type) => Category, (category) => category.orders)
//  category_id: Category;
  @ApiProperty({ example: '1', description: 'Id' })
  @Column({ name: 'category_id', type: 'integer' })
  category_id: number;


  @ApiProperty({example: 'false', description: 'Статус заказа'})
  @Column()
  is_done: boolean; 

  @ManyToOne(() => Category, (category) => category.orders)
  // eslint-disable-next-line prettier/prettier
  @JoinColumn({ name: "category_id", referencedColumnName: "category_id" })
  category: Category;
}