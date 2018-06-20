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

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.http.get<Question[]>("http://kohlmeise.cosy.sbg.ac.at/app/questions/" + id).subscribe((data: any) => {
      this.questions = data.questions;
    });
  }

  showValues() {
    console.log(this.form.value)

    this.http.post("http://kohlmeise.cosy.sbg.ac.at/app/evaluate", this.form.value, {responseType: 'text'}).subscribe((data: any) => {
      this.router.navigate(['/result', {result: data}]);
    });

  }

}
