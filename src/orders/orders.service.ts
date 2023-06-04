import { HttpStatus, Injectable } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { Order } from "src/orders/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOrderDto } from "./dto/orderDto";
import { Category } from "src/categories/category.entity";
import { Customer } from "src/customers/customer.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>, // "внедряем" репозиторий Customer в сервис
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>, // "внедряем" репозиторий Artilcle в сервис
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>, // "внедряем" репозиторий Artilcle в сервис

        ) {}


  async create(orderDto: CreateOrderDto): Promise<Order>
  {
    const order = this.orderRepository.create(); //создаем объект Customer из репозитория
    order.order_date = new Date(orderDto.order_date)
    order.comment = orderDto.comment;
    order.is_done = null;
    order.category = await this.categoryRepository.findOneBy({
      category_id: orderDto.category
    });
    order.customer = await this.customerRepository.findOneBy({
      fullname: orderDto.customer
    });
;
    await this.orderRepository.save(order); //сохраняем объект Customer в БД
    return order; //возвращаем объект Customer
   }
  
 
   

   findOne(id: number): Promise<Order> {
    // Promise<Customer> - указывает, что функция возвращает объект Customer в виде Promise (c асинхронного потока)
    return this.orderRepository.findOne({
      //получаем объект Customer по id
      where: { id }, 
      relations: {category: true},//указываем условие поиска по id
    });
  }


    
    async findAll(): Promise<Order[]> {
      const orders = await this.orderRepository.find({
        relations: {category: true, customer: true},
        //получаем связанные объекты
      }); //получаем массив Customer из БД
      return orders; //возвращаем массив Customer
    }
  

    async update(id: number, updatedOrder: Order) {
      //получаем объект Customer для обновления по id
      const order = await this.orderRepository.findOne({ where: { id } }); //получаем объект Customer по id из БД
      // order.customer_id = updatedOrder.customer_id; //обновляем поля объекта Customer
      // order.category_id = updatedOrder.category_id;
      order.order_date = updatedOrder.order_date;
      order.comment = updatedOrder.comment;
      
      await this.orderRepository.save(order); //сохраняем объект Customer в БД
      return order; //возвращаем объект Customer
    }
  

    remove(id: number) {
      this.orderRepository.delete({ id }); //удаляем объект Customer из БД
    }
  
    

 
  



}