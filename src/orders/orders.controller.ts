import { OrdersService } from './orders.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/orderDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('orders')
@ApiTags('Заказы') // Тег для документации
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Получение данных обо всех заказах' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных о заказе по его id' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновление данных о заказе по его id' })
  update(@Param('id') id: string, @Body() updateOrder: Order) {
    return this.ordersService.update(+id, updateOrder);
  }

  @Post()
  @ApiOperation({ summary: 'Добавление заказа' })
  create(@Body() orderDto: CreateOrderDto) {
    return this.ordersService.create(orderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление заказа по его id' })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}