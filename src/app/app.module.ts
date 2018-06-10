import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestonCardComponent } from './queston-card/queston-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionComponent } from './question/question.component';
import { QuestComponent } from './quest/quest.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QuestonCardComponent,
    QuestionComponent,
    QuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

