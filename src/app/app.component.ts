import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Quiz } from './quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Quiz';
  quizzes: Quiz[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Quiz[]>("http://kohlmeise.cosy.sbg.ac.at/app/quizzes/").subscribe((data: any) => { 
      this.quizzes = data.quizzes; 
    });
  }

}
