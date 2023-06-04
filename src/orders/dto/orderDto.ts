import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateOrderDto {

  @IsNotEmpty({message: 'Заполните поле order_date'})
  // @IsDate({message: 'Дата должна быть введена в формате ГГГГ-ММ-ДД'})
  @ApiProperty({example: '2023-05-11', description: 'Введите желаемую дату фотосессии'})
  order_date: Date;

  // @IsNotEmpty({message: 'Заполните поле category_id'})
  // @IsInt({message: "Номер категории должен быть числом"})
  category: number;


    @IsString({message: "Комментарий заказчика должен быть строкой"})
    @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
    comment: string;



  }  