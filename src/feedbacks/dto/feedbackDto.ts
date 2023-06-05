import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFeedbackDto 
{
    @IsNotEmpty({message: 'Заполните поле feedback_text'})
    @IsString({message: "Текст отзыва должен быть строкой"})
    @ApiProperty({example: '"Очень понравились готовые фотографии"', description: 'Введите текст отзыва'})
    feedback_text: string;


    @IsString({message: "Комментарий заказчика должен быть строкой"})
    @ApiProperty({example: '"Хотим семейную фотосессию на природе"', description: 'Добавьте комментарий к заказу'})
    customer: string;
}