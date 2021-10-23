import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  answerInput?:string;
  constructor(private questionService:QuestionService,
              private categoryService:CategoryService,
              private toastrService:ToastrService) { }

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
  checkAnswer(){
    if(this.question.answer?.toUpperCase()==this.answerInput?.toUpperCase()){
     this.toastrService.success("Answer is correct")
    }else{
      this.toastrService.error("Answer is wrong")
    }

  }
  
}
