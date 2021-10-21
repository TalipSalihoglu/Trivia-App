import { Injectable } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "./category.model";

@Injectable()
export class CategoryRepository{
    private categoryies:Category[]=[]
    constructor(private categoryService:CategoryService) {
      
    }
    getCategories(){
        return this.categoryService.getCategories().subscribe(response=>{
            this.categoryies=response;
        })
    }
}
