import { FeedbacksService } from './feedbacks.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto } from './dto/feedbackDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@Controller('feedbacks')
@ApiTags('Отзывы') // Тег для документации
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Get()
  @ApiOperation({ summary: 'Получение данных обо всех отзывах' })
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных об отзыве по его id' })
  findOne(@Param('id') id: string) {
    return this.feedbacksService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновление данных об отзыве по его id' })
  update(@Param('id') id: string, @Body() updateFeedback: Feedback) {
    return this.feedbacksService.update(+id, updateFeedback);
  }

  @Post()
  @ApiOperation({ summary: 'Добавление отзыва' })
  create(@Body() customerDto: CreateFeedbackDto) {
    return this.feedbacksService.create(customerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление отзыва по его id' })
  remove(@Param('id') id: string) {
    return this.feedbacksService.remove(+id);
  }
}