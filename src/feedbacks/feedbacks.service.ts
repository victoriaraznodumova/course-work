import { HttpStatus, Injectable } from "@nestjs/common";
import { Feedback } from "./feedback.entity";
import { In, Repository } from "typeorm";
import { Customer } from "src/customers/customer.entity";
import { Order } from "src/orders/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFeedbackDto } from "./dto/feedbackDto";
//import { IncompleteCustomerDto } from "./dto/incomplete-customer.dto";

@Injectable()
export class FeedbacksService {
   
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>, // "внедряем" репозиторий Customer в сервис
   // @InjectRepository(Affiliation)
    //private readonly affiliationRepository: Repository<Affiliation>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>, // "внедряем" репозиторий Artilcle в сервис
  ) {}


  async create(feedbackDto: CreateFeedbackDto): Promise<Feedback>
  {
     //получаем объект CreateCustomerDto
     const feedback = this.feedbackRepository.create(); //создаем объект Customer из репозитория
     feedback.order_id = feedbackDto.order_id; //заполняем поля объекта Customer
     feedback.customer_id = feedbackDto.customer_id;
     feedback.feedback_date = new Date(feedbackDto.feedback_date)
     feedback.feedback = feedbackDto.feedback;
    //  const affiliations = await this.affiliationRepository.findBy({
    //    //получаем массив Affiliation по id
    //    id: In(customerDto.affiliations),
    //  });
     //customer.affiliations = affiliations;
     await this.feedbackRepository.save(feedback); //сохраняем объект Customer в БД
     return feedback; //возвращаем объект Customer
   }
 

   findOne(id: number): Promise<Feedback> {
    // Promise<Customer> - указывает, что функция возвращает объект Customer в виде Promise (c асинхронного потока)
    return this.feedbackRepository.findOne({
      //получаем объект Customer по id
      where: { id }, //указываем условие поиска по id
      relations: {}, //получаем связанные объекты
    });
  }


    
    async findAll(): Promise<Feedback[]> {
      const feedbacks = await this.feedbackRepository.find({
        //получаем связанные объекты
        // relations: {
        //   orders: true,
        // },
      }); //получаем массив Customer из БД
      return feedbacks; //возвращаем массив Customer
    }
  

    async update(id: number, updatedFeedback: Feedback) {
      //получаем объект Customer для обновления по id
      const feedback = await this.feedbackRepository.findOne({ where: { id } }); //получаем объект Customer по id из БД
      feedback.order_id = updatedFeedback.order_id; //обновляем поля объекта Customer
      feedback.feedback_date = updatedFeedback.feedback_date;
      feedback.feedback = updatedFeedback.feedback;
      //customer.affiliations = updatedCustomer.affiliations;
      await this.feedbackRepository.save(feedback); //сохраняем объект Customer в БД
      return feedback; //возвращаем объект Customer
    }
  

    remove(id: number) {
      this.feedbackRepository.delete({ id }); //удаляем объект Customer из БД
    }
  
  



}
