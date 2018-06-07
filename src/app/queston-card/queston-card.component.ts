import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queston-card',
  templateUrl: './queston-card.component.html',
  styleUrls: ['./queston-card.component.css']
})
export class QuestonCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  question = "Das ist eine Frage!";
  answer1 = 'Antwort 1';
  answer2 = 'Antwort 2';
  answer3 = 'Antwort 3';
}
