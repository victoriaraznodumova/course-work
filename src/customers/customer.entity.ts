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


  @ApiProperty({example: '"Иван"', description: 'Имя пользователя'})
  @Column({name: 'name', type: 'text'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;
 

  @ApiProperty({example: '"Иванов"', description: 'Фамилия пользователя'})
  @Column({name: 'surname', type: 'text'})
  surname: string;


  @ApiProperty({example: '24', description: 'Возраст пользователя'})
  @Column({name: 'age', type: 'text'})
  age: number;


  @ApiProperty({example: '"abc@gmail.com"', description: 'Электронная пользователя'})
  @Column({name: 'email', type: 'text'})
  email: string;


  @ApiProperty({example: '"123456"', description: 'Пароль пользователя'})
  @Column({name: 'password', type: 'text'})
  password: string;



  
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