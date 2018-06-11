import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  question: string;
  answer1: string;
  answer2: string;

  constructor() {
    this.question = "Is this a bird?"
    this.answer1 = "Yes";
    this.answer2 = "No";
  }

  ngOnInit() {
  }

}
