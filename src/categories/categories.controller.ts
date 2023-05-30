import { CategoriesService } from './categories.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Category } from './category.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/categoryDto';



@Controller('categories')
@ApiTags('Категории') // Тег для документации
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategory: Category) {
    return this.categoriesService.update(+id, updateCategory);
  }

  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.create(categoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }


}
