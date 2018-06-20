import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'quizzes', component: QuizComponent},
  { path: 'quiz/:id', component: QuestionComponent },
  { path: '',   redirectTo: '/quizzes', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
