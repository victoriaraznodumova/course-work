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
  //   @InjectRepository(Order)
  //   private readonly orderRepository: Repository<Order>, // "внедряем" репозиторий Artilcle в сервис
   ) {}


  async create(categoryDto: CreateCategoryDto){
     //получаем объект CreateCustomerDto
     const category = this.categoryRepository.create(); //создаем объект Customer из репозитория
     category.name = categoryDto.name; //заполняем поля объекта Customer
     category.price = categoryDto.price;
     await this.categoryRepository.save(category); //сохраняем объект Customer в БД
     return category; 

    // const category = await this.categoryRepository.save({
    //   name: categoryDto.name,
    //   price: categoryDto.price,
    // }); //создаем объект Customer из репозитория
    // return { category } 
   }
 

   findOne(category_id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      //получаем объект Customer по id
      where: { category_id }, //указываем условие поиска по id
      // relations: { orders: true }, //получаем связанные объекты
    });
  }


    
    async findAll(): Promise<Category[]> {
      const categories = await this.categoryRepository.find({
        // relations: { orders: true },
        //получаем связанные объекты
      }); //получаем массив Customer из БД
      return categories; //возвращаем массив Customer
    }
  

    async update(category_id: number, updatedCategory: Category) {
      //получаем объект Customer для обновления по id
      const category = await this.categoryRepository.findOne({ where: { category_id } }); //получаем объект Customer по id из БД
      category.name = updatedCategory.name; //обновляем поля объекта Customer
      category.price = updatedCategory.price;
      await this.categoryRepository.save(category); //сохраняем объект Customer в БД
      return category; //возвращаем объект Customer
    }
  

    remove(category_id: number) {
      this.categoryRepository.delete({ category_id }); //удаляем объект Customer из БД
    }
}