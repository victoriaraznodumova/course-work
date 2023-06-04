import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateOrderDto {

  @IsNotEmpty({message: 'Заполните поле order_date'})
  @IsDateString()
  @ApiProperty({example: '2023-05-11', description: 'Введите желаемую дату фотосессии в формате ГГГГ-ММ-ДД'})
  order_date: Date;

  // @IsNotEmpty({message: 'Заполните поле category_id'})
  // @IsInt({message: "Номер категории должен быть числом"})
  category: number;


  @IsString({message: "Комментарий заказчика должен быть строкой"})
  @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
  comment: string;


  // @IsInt({message: "Комментарий заказчика должен быть строкой"})
  @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
  customer: string;



  }  