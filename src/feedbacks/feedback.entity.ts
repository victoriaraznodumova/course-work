import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from 'src/customers/customer.entity';

@Entity('feedbacks') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Feedback {

  @ApiProperty({example: '1', description: 'Номер отзыва'})
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  

  @ApiProperty({example: '"2001-09-04"', description: 'Дата публикации отзыва'})
  @Column({name: 'feedback_date', type: 'date'})
  feedback_date: Date;

  
  @ApiProperty({example: '"Очень понравились готовые фотографии"', description: 'Текст отзыва'})
  @Column({name: 'feedback_text', type: 'text'})
  feedback_text: string;


  @ManyToOne(() => Customer, (customer) => customer.feedbacks)
  @JoinColumn({ name: "customer", referencedColumnName: "fullname" })
  customer: Customer;
}