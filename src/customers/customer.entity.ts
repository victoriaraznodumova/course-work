import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Customer {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  customer_id: number;

  @Column({name: 'name', type: 'text'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  name: string;
 
  @Column({name: 'surname', type: 'text'})
  surname: string;

  @Column({name: 'age', type: 'text'})
  age: number;

  @Column({name: 'phone_number', type: 'text'})
  phone_number: string;

  @Column({name: 'comment', type: 'text'})
  comment: string;
  nullable: true;

  //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
  // @ManyToMany((type) => Article, (article) => article.authors) 
}