import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('customers')
@ApiTags('Заказчики') // Тег для документации
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomer: Customer) {
    return this.customersService.update(+id, updateCustomer);
  }

  @Post()
  @ApiOperation({ summary: 'Создание животного' }) // Операция для Swagger
  create(@Body() createCustomer: Customer) {
    return this.customersService.create(createCustomer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }

}