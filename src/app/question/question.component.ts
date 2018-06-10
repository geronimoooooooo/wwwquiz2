import { Component, OnInit } from '@angular/core';
import { QuestComponent } from '../quest/quest.component'
import { QuestionSingle } from '../question-single';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Object[];
  qList: QuestionSingle[];
  aList: String[] = [];
  a1: string;

  constructor(private http: HttpClient) {

    console.log("Constructor of QuestionComponent.")

    this.qList = [
      new QuestionSingle("qid1", "Frage 1", "aid_asdf", "Select lists are used if you want to allow the user to pick from multiple options.Select lists are used if you want to allow the user to pick from multiple options.", "aid_44", "an 2", "aid_easd", "antwort 3"),
      new QuestionSingle("qid2", "Frage ??", "aid2ads", "answer 1", "aid23asd", "an 2", "aid3", "antwort 3"),
      new QuestionSingle("qid745", "Frage adfasd?", "aidasdf", "answer 1", "aid2_easd", "an 2", "aid3_easdf", "antwort 3")
    ];


  }
  //https://api.github.com/users/seeschweiler
  ngOnInit() {
    /*
    this.http.get('http://kohlmeise.cosy.sbg.ac.at/app/quizzes/').subscribe(data => {
      console.log(data);
    });*/
  }

  clickedMe(event: Event) {

    var chosen = (event.target as HTMLInputElement).value;
    this.aList.push(chosen);
    console.log(event.srcElement.nodeValue);
    // let elementId: string = (event.target as Element).nodeValue;
    console.log("clicked: " + chosen);
  }
  showValues() {
    console.log("array: " + this.aList.toLocaleString());
  }
}
