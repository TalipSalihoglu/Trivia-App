import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl:string="http://jservice.io/api/"
  constructor(private httpClient: HttpClient) { }

  getQuestion():Observable<Question[]> {
    let newPath = this.baseUrl + "random"
    return this.httpClient.get<Question[]>(newPath);
  }
}
