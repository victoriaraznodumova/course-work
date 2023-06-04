import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateCustomerDto {

    @IsNotEmpty({message: 'Заполните поле name'})
    @IsString({message: "Имя пользователя должно быть строкой"})
    @ApiProperty({example: '"Иван"', description: 'Введите имя пользователя'})
    name: string;


    @IsNotEmpty({message: 'Заполните поле surname'})
    @IsString({message: "Фамилия пользователя должна быть строкой"})
    @ApiProperty({example: '"Иванов"', description: 'Фамилия пользователя'})
    surname: string;


    @IsNotEmpty({message: 'Заполните поле age'})
    @IsInt({message: "Возраст пользователя должен быть числом"})
    @ApiProperty({example: '24', description: 'Введите возраст пользователя'})
    age: number;


    @IsNotEmpty({message: 'Заполните поле email'})
    @IsEmail()
    @ApiProperty({example: '"abc@gmail.com"', description: 'Введите электронную почту пользователя'})
    email: string;


    @IsNotEmpty({message: 'Заполните поле password'})
    @MinLength(6, {message: "Пароль должен содержать не менее 6 символов"})
    @ApiProperty({example: '"123456"', description: 'Введите пароль'})
    password: string;



    // @IsString({message: "Комментарий заказчика должен быть строкой"})
    // @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
    // comment: string;
  }