import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string="http://jservice.io/api/"
  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<Category[]> {
    let newPath = this.baseUrl + "categories?count=10"
    return this.httpClient.get<Category[]>(newPath);
  }
  getCategoryById(id?:number):Observable<any> {
    let newPath = this.baseUrl + "category?id="+id
    return this.httpClient.get<any>(newPath);
  }
}
