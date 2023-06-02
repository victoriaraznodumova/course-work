import { CategoriesService } from './categories.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { Category } from './category.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/categoryDto';


@Controller('categories')
@ApiTags('Категории') // Тег для документации
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Получение данных обо всех категориях заказов' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных о категории заказа по её id' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновление данных о категории заказа по её id' })
  update(@Param('id') id: string, @Body() updateCategory: Category) {
    return this.categoriesService.update(+id, updateCategory);
  }

  @Post()
  @ApiOperation({ summary: 'Добавление новой категории заказа' })
  // @UsePipes(new ValidationPipe())
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'УДаление категории заказа по её id' })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}