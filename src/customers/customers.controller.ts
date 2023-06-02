import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('customers')
@ApiTags('Заказчики') // Тег для документации
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  @ApiOperation({ summary: 'Получение данных обо всех заказчиках' })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных о заказчике по его id' })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновление данных о заказчике по его id' })
  update(@Param('id') id: string, @Body() updateCustomer: Customer) {
    return this.customersService.update(+id, updateCustomer);
  }

  @Post()
  @ApiOperation({ summary: 'Добавление нового заказчика' }) // Операция для Swagger
  create(@Body() createCustomer: Customer) {
    return this.customersService.create(createCustomer);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление заказчика по его id' })
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}