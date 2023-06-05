import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator'

export class CreateOrderDto {

  @IsNotEmpty({message: 'Заполните поле order_date'})
  @IsDateString()
  @ApiProperty({example: '2023-05-11', description: 'Введите желаемую дату фотосессии в формате ГГГГ-ММ-ДД'})
  order_date: Date;


  @IsString({message: "Комментарий заказчика должен быть строкой"})
  @ApiProperty({example: 'Хотим семейную фотосессию на природе', description: 'Добавьте комментарий к заказу'})
  comment: string;


  @IsNotEmpty({message: 'Заполните поле customer'})
  @IsString({message: "Полное имя заказчика должно быть строкой"})
  @ApiProperty({example: 'Иван Иванов', description: 'Введите полное имя, использованное при регистрации'})
  customer: string;


  @IsNotEmpty({message: 'Заполните поле category'})
  @IsInt({message: "Номер категории должен быть числом"})
  @ApiProperty({example: '1', description: 'Введите номер выбранной категории'})
  category: number;
  }  