import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestonCardComponent }   from './queston-card/queston-card.component';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'q', component: QuestonCardComponent },
  { path: 'quiz', component: QuestionComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
