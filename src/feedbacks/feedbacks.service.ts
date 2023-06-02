import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feedback } from "./Feedback.entity";
import { CreateFeedbackDto } from "./dto/feedbackDto";

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,  
  ) {}
 

  async create(feedbackDto: CreateFeedbackDto): Promise<Feedback>
  {
      const feedback = this.feedbackRepository.create(); 
      feedback.feedback_date = new Date(); 
      feedback.feedback_text = feedbackDto.feedback_text;  
      await this.feedbackRepository.save(feedback); //сохраняем объект Sale в БД
      return feedback; //возвращаем объект Sale
  }
  

  findOne(id: number): Promise<Feedback> {
  // Promise<Sale> - указывает, что функция возвращает объект Sale в виде Promise (c асинхронного потока)
   return this.feedbackRepository.findOne({
     //получаем объект Sale по id
     where: { id }, //указываем условие поиска по id
   });
 }
  

  async findAll(): Promise<Feedback[]> {
    const feedbacks = await this.feedbackRepository.find({
    });
    return feedbacks; //возвращаем массив Sale
  }

 
  async update(id: number, updatedSale: Feedback) {
    //получаем объект Sale для обновления по id
    const feedback = await this.feedbackRepository.findOne({ where: { id } }); //получаем объект Sale по id из БД
    feedback.feedback_date =  new Date (updatedSale.feedback_date); //обновляем поля объекта Sale
    feedback.feedback_text = updatedSale.feedback_text;
    // feedback.order_id = updatedSale.order_id;
    await this.feedbackRepository.save(feedback); //сохраняем объект Sale в БД
    return feedback; //возвращаем объект Author
  }
  

  remove(id: number) {
    this.feedbackRepository.delete({ id }); //удаляем объект Sale из БД
    return HttpStatus.OK;
  }
}