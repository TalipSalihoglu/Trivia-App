import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './component/question/question.component';
import { NaviComponent } from './component/navi/navi.component';
import { CategoryComponent } from './component/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    NaviComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
