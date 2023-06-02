import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {

    @IsNotEmpty({message: 'Заполните поле name'})
    @IsString({message: "Имя заказчика должно быть строкой"})
    @ApiProperty({example: '"Иван"', description: 'Введите имя заказчика'})
    name: string;


    @IsNotEmpty({message: 'Заполните поле surname'})
    @IsString({message: "Фамилия заказчика должна быть строкой"})
    @ApiProperty({example: '"Иванов"', description: 'Фамилия заказчика'})
    surname: string;


    @IsNotEmpty({message: 'Заполните поле age'})
    @IsInt({message: "Возраст заказчика должен быть числом"})
    @ApiProperty({example: '24', description: 'Введите возраст заказчика'})
    age: number;


    @IsNotEmpty({message: 'Заполните поле phone_number'})
    @IsString({message: "Номер телефона заказчика должен быть строкой"})
    @ApiProperty({example: '"89998887766"', description: 'Введите номер телефона заказчика'})
    phone_number: string;


    @IsString({message: "Комментарий заказчика должен быть строкой"})
    @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
    comment: string;
  }