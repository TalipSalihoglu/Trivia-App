import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories:Category[]=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
        this.categories=response
    });
  }

}
