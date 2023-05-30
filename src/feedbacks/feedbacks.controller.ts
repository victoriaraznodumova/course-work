import { FeedbacksService } from './feedbacks.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { CreateFeedbackDto } from './dto/feedbackDto';
import { ApiTags } from '@nestjs/swagger';



@Controller('feedbacks')
@ApiTags('Отзывы') // Тег для документации
export class FeedbacksController {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Get()
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbacksService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFeedback: Feedback) {
    return this.feedbacksService.update(+id, updateFeedback);
  }

  @Post()
  create(@Body() customerDto: CreateFeedbackDto) {
    return this.feedbacksService.create(customerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbacksService.remove(+id);
  }


}
