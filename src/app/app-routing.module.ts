import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'quiz/:id', component: QuestionComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
