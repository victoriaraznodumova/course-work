import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {

  @IsNotEmpty({message: 'Заполните поле name'})
  @IsString({message: "Название категории должно быть строкой"})
  @ApiProperty({example: '"Семейная фотосессия"', description: 'Введите название категории'})
  name: string;


  @IsNotEmpty({message: 'Заполните поле price'})
  @IsInt({message: "Стоимость категории должна быть числом"})
  @ApiProperty({example: '8000', description: 'Укажите стоимость фотосессии в данной категории'})
  price: number;
  }