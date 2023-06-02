import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({example: '1', description: 'Номер заказчика'})
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;


  @ApiProperty({example: '"Иван"', description: 'Имя заказчика'})
  @Column({name: 'name', type: 'text'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;
 

  @ApiProperty({example: '"Иванов"', description: 'Фамилия заказчика'})
  @Column({name: 'surname', type: 'text'})
  surname: string;


  @ApiProperty({example: '24', description: 'Возраст заказчика'})
  @Column({name: 'age', type: 'text'})
  age: number;


  @ApiProperty({example: '"89998887766"', description: 'Номер телефона заказчика'})
  @Column({name: 'phone_number', type: 'text'})
  phone_number: string;


  @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Комментарий заказчика к желаемой фотосессии'})
  @Column({name: 'comment', type: 'text'})
  comment: string;
  nullable: true;

  
  @OneToMany((type) => Customer, (customer) => customer.id)
  @JoinTable({
    name: "question_categories", // table name for the junction table of this relation
    joinColumn: {
        name: "question",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "category",
        referencedColumnName: "id"
    }
})
customers: Customer[]; 
}

// @OneToMany((type) => Customer, (customer) => customer.id)
// @JoinTable(
//   {name: 'customer_id', joinColumn: "name"})
// customers: Customer[]; 