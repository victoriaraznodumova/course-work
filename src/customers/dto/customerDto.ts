import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateCustomerDto {

    @IsNotEmpty({message: 'Заполните поле name'})
    @IsString({message: "Имя пользователя должно быть строкой"})
    @ApiProperty({example: 'Иван Иванов', description: 'Введите имя пользователя'})
    fullname: string;


    @IsNotEmpty({message: 'Заполните поле age'})
    @IsInt({message: "Возраст пользователя должен быть числом"})
    @ApiProperty({example: '24', description: 'Введите возраст пользователя'})
    age: number;


    @IsNotEmpty({message: 'Заполните поле email'})
    @IsEmail()
    @ApiProperty({example: 'abc@gmail.com', description: 'Введите электронную почту пользователя'})
    email: string;
  }