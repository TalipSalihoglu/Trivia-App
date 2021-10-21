import { Injectable } from "@angular/core";
import { QuestionService } from "../services/question.service";
import { Question } from "./question.model";

@Injectable()
export class QuestionRepository{
    private question:any
    constructor(private questionService:QuestionService) {
      
    }
    getQuestion(){
        return this.questionService.getQuestion().subscribe(response=>{
            this.question=response;
        })
    }
    getCategory(){
        return this.questionService.getQuestion().subscribe(response=>{
            this.question=response;
            
        })
    }
}
