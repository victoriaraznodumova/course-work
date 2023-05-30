import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Customer } from "./customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/customerDto";

@Injectable() //возможности применения такого подхода, как Dependency Injection
export class CustomersService {
    constructor(
      private readonly datasourceService: DatasourceService,
      @InjectRepository(Customer)
      private readonly customerRepository: Repository<Customer>
      ) {}

    // Promise<Animal> - указывает, что функция возвращает объект Animal в виде Promise (c асинхронного потока)
    async create(customerDto: CreateCustomerDto): Promise<Customer> {
      const customer = this.customerRepository.create(); 
      customer.name = customerDto.name;
      customer.surname = customerDto.surname;
      customer.age = customerDto.age;
      customer.phone_number = customerDto.phone_number;
      customer.comment = customerDto.comment;
      await this.customerRepository.save(customer);
      return customer;
    }

    findOne(id: number): Promise<Customer> {
      return this.customerRepository.findOne({
        where: { id }, 
      });
    }

    async findAll(): Promise<Customer[]> {
      const customers = await this.customerRepository.find({
      }); 
      return customers;
    }
    
    async update(id: number, updatedCustomer: Customer) {
      //получаем объект Animal для обновления по id
      const customer = await this.customerRepository.findOne({ where: { id } }); //получаем объект Animal по id из БД
      customer.name = updatedCustomer.name;
      customer.surname = updatedCustomer.surname;
      customer.age = updatedCustomer.age;
      customer.phone_number = updatedCustomer.phone_number;
      customer.comment = updatedCustomer.comment;
      await this.customerRepository.save(customer); //сохраняем объект Animal в БД
      return customer; //возвращаем объект Animal
    }

    remove(id: number) {
      this.customerRepository.delete({ id }); //удаляем объект Animal из БД
    } 
}