import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question.model';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public question :Question = new Question();
  public isShowAnswer:boolean =false
  public title?:string;
  constructor(private questionService:QuestionService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getQuestion()
  }

  getQuestion(){
    this.questionService.getQuestion().subscribe(response=>{                  
      this.question=response[0]
      this.getCategoryById(this.question.category_id)
    });
  }
  showAnswer(){
    this.isShowAnswer=!this.isShowAnswer
  }

  getCategoryById(id?:number){
    this.categoryService.getCategoryById(id).subscribe(response=>{
      this.title=response.title
    }) 
  }
  
}
