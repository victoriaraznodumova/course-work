import { HttpStatus, Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { In, Repository } from "typeorm";
import { Order } from "src/orders/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "./dto/categoryDto";
// import { IncompleteCustomerDto } from "./dto/incomplete-customer.dto";

@Injectable()
export class CategoriesService {
   
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>, // "внедряем" репозиторий Customer в сервис
    @InjectRepository(Order)
    private readonly articleRepository: Repository<Order>, // "внедряем" репозиторий Artilcle в сервис
  ) {}


  async create(categoryDto: CreateCategoryDto): Promise<Category>
  {
     //получаем объект CreateCustomerDto
     const category = this.categoryRepository.create(); //создаем объект Customer из репозитория
     category.name = categoryDto.name; //заполняем поля объекта Customer
     category.price = categoryDto.price;
     await this.categoryRepository.save(category); //сохраняем объект Customer в БД
     return category; 
   }
 

   findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      //получаем объект Customer по id
      where: { id }, //указываем условие поиска по id
      relations: { orders: true }, //получаем связанные объекты
    });
  }


    
    async findAll(): Promise<Category[]> {
      const categories = await this.categoryRepository.find({
        relations: { orders: true },
        //получаем связанные объекты
      }); //получаем массив Customer из БД
      return categories; //возвращаем массив Customer
    }
  

    async update(id: number, updatedCategory: Category) {
      //получаем объект Customer для обновления по id
      const category = await this.categoryRepository.findOne({ where: { id } }); //получаем объект Customer по id из БД
      category.name = updatedCategory.name; //обновляем поля объекта Customer
      category.price = updatedCategory.price;
      await this.categoryRepository.save(category); //сохраняем объект Customer в БД
      return category; //возвращаем объект Customer
    }
  

    remove(id: number) {
      this.categoryRepository.delete({ id }); //удаляем объект Customer из БД
    }
  
    



}