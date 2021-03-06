import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Question } from '../question';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('f') form: any;
  questions: Question[];
  question: Question;
  index: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.http.get<Question[]>("https://kohlmeise.cosy.sbg.ac.at/app/questions/" + id).subscribe((data: any) => {
      this.questions = data.questions;
      this.question = this.questions[this.index = 0];
    });
  }

  showValues() {
    this.http.post("https://kohlmeise.cosy.sbg.ac.at/app/evaluate", this.form.value, {responseType: 'text'}).subscribe((data: any) => {
      this.router.navigate(['/result', {result: data}]);
    });
  }

  prevQuestion() {
    if (this.index > 0) {
      this.index -= 1;
      this.question = this.questions[this.index];
    }
  }

  setQuestion(event) {
    this.index = event.target.dataset.index;
    this.question = this.questions[this.index];
  }

  nextQuestion() {
    if (this.index < this.questions.length) {
      this.index += 1;
      this.question = this.questions[this.index];
    }
  }

}
