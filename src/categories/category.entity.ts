import { ApiProperty } from '@nestjs/swagger';
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
  
  @ApiProperty({example: '1', description: 'Номер категории'})
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  category_id: number;


  @ApiProperty({example: '"Семейная фотосессия"', description: 'Название категории'})
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;


  @ApiProperty({example: '8000', description: 'Стоимость фотосессии в данной категории'})
  @Column()
  price: number;


  // @OneToMany(() => Order, (order) => order.category)
  //   // @JoinTable({
  //   //   //join таблица 
  //   //   name: 'order_category',
  //   //   joinColumn: { name: 'category_id' }, 
  //   //   inverseJoinColumn: {name: 'order_id'}
  //   // })

  //   @JoinTable()
  //   orders: Order[]
}