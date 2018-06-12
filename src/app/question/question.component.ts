import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestComponent } from '../quest/quest.component'
import { QuestionSingle } from '../question-single';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @ViewChild('f') form:any;
  questions: Object[];
  qList: QuestionSingle[] = [];
  aList: String[] = [];
  mapQuestAnswer: Map<string,string>;
  correctAnswers: number = 0;
  json1: string = `
    {
      "idq": "string1",
      "question": "string",
      "ida1": "ida1",
      "a1": "string",
      "ida2": "ida2",
      "a2": "a2",
      "ida3": "ida3",
      "a3": "a3",
      "idaCorrect": "idaCorrect"
    }`;

  json: string = `[
  {
    "idq": "idq_5b111cc2-6e25-11e8-adc0-fa7ae01bbebc",
    "question": "Wie heißt die Kampfkatze von He-Man???",
    "ida1": "ida1_5b111f6a-6e25-11e8-adc0-fa7ae01bbebc",
    "a1": "Bella",
    "ida2": "ida2_5b1120b4-6e25-11e8-adc0-fa7ae01bbebc",
    "a2": "Cringer",
    "ida3": "ida3_5b1121e0-6e25-11e8-adc0-fa7ae01bbebc",
    "a3": "Tiger",
    "idaCorrect": "ida2_5b1120b4-6e25-11e8-adc0-fa7ae01bbebc"
  },
  {
    "idq": "idq_5b112302-6e25-11e8-adc0-fa7ae01bbebc",
    "question": "Wie heißt der Hauptgegner von He-Man?",
    "ida1": "5b112410-6e25-11e8-adc0-fa7ae01bbebc",
    "a1": "Wario",
    "ida2": "5b1127b2-6e25-11e8-adc0-fa7ae01bbebc",
    "a2": "Skeletor",
    "ida3": "5b1128d4-6e25-11e8-adc0-fa7ae01bbebc",
    "a3": "Shredder",
    "idaCorrect": "5b1127b2-6e25-11e8-adc0-fa7ae01bbebc"
  }]
  `;

  constructor(private http: HttpClient) {    
    console.log("Constructor of QuestionComponent.")

    for(let str of this.json){
      
    }/*
    this.qList = [
      new QuestionSingle("qid1", "Frage 1", "aid_1", "Select lists are used if you want to allow the user to pick from multiple options.Select lists are used if you want to allow the user to pick from multiple options.", "aid_44", "an 2", "aid_easd", "antwort 3","aid_1"),
      new QuestionSingle("qid2", "Frage ??", "aid_2", "answer 1", "aid23asd", "an 2", "aid3", "antwort 3", "aid_2"),
      new QuestionSingle("qid745", "Frage adfasd?", "aid_3", "answer 1", 
      "aid2_easd", "an 2", "aid3_easdf", "aid_3", "aid_3")
    ];
    
    this.showCorrectAnswers();
   
    for(let q of this.qList){
      console.log("cor:"+q.idaCorrect );
    } 
   
    this.mapQuestAnswer = new Map();
    //set qid and correct answer id
    this.qList.forEach(element => {      
      this.mapQuestAnswer.set(element.idq, element.idaCorrect);
    });*/
  }
  //https://api.github.com/users/seeschweiler
  ngOnInit() {
    let url="https://gist.githubusercontent.com/geronimoooooooo/aa0da95fd7c0bf7956d5ad5a9ac9491e/raw/0190293601c53deacefb77998497202d99990e4b/q1.json";
    this.http.get(url).subscribe(data => {
      console.log(data);
   
    let arrU: QuestionSingle[] = [];
    Object.assign(arrU, data);
    this.qList = arrU;
    //let u: QuestionSingle = new QuestionSingle();
    //let json1 = JSON.parse(this.json1);
    //Object.assign(u, data);
    //let json = JSON.parse(json1);
    
    //console.log(u.question);
    //console.log(arrU.length);
    //this.qList.push(u);
    
  });   
  }
  showCorrectAnswers(){
    console.log("following correct answers:");
    for(let i=0; i<this.qList.length; i++){
      console.log("this.qList[i].idaCorrect: "+this.qList[i].idaCorrect);      
    }
  }

  clickedMe(event: Event) {

    var chosen = (event.target as HTMLInputElement).value;
    this.aList.push(chosen);
    console.log(event.srcElement.nodeValue);
    // let elementId: string = (event.target as Element).nodeValue;
    console.log("clicked: " + chosen);
  }

  workMap(){
    let map = new Map();
    map.set("A","B");
    map.set("C","d");

    console.log(map.get("A")+" :"+ map.size);
    map.forEach((value: string, key: string) => {
      console.log(key, value);
   });

    let jsonstr = this.mapToJson(map)
    console.log(jsonstr);
    let map4 = JSON.parse('{ "myString": "string", "myNumber": "4" }');
    for(let ob in map4){
      console.log(map4[ob]);
    }
    console.log("obj:"+ map4.size);
  }

  showValues() {    
    console.log(this.form)
    let json = JSON.stringify(this.form.value);
    console.log("json: "+json);
    let map2 = JSON.parse(json);
    this.correctAnswers = this.calculatePoints(new Map(Object.entries(map2)));
    for(let obj in map2){
      console.log("key: "+obj+": "+map2[obj]);
      for(let q of this.qList){
        console.log("cor:"+q.idaCorrect +": "+map2[obj]);
        if(q.idaCorrect==map2[obj]){
          console.log("correct answer!");
          this.correctAnswers+=1;
        }
      }      
    }
    console.log("CORRECTANSWERS: "+this.correctAnswers);
    let map = new Map();
    map.set("A",1);
    map.forEach((value: string, key: string) => {
      console.log(key, value);
  });
    console.log("size:"+map.size+", "+this.form.value);

  }

  mapToJson(map):string {
    return JSON.stringify([map]);
  }

  jsonToMap(jsonStr:string) {
    return new Map(JSON.parse(jsonStr));
  }
  /**Calculates how many questions have been answered correctly.
   * 
   * @param mapAnswers Map containing question ids and selected answer ids.
   * @returns number - The amount of correct answers.
   */
  calculatePoints(mapAnswers:Map<string, string>):number{
    let correctAnswers: number = 0;
    
    for(let obj in mapAnswers){
      console.log(" mapAnswers[obj] given answer: "+mapAnswers[obj])
      if(mapAnswers[obj] in this.mapQuestAnswer.values()){
        correctAnswers++;
      }
    }
    this.showCorrectAnswers();
    for(let obj in this.mapQuestAnswer){
      console.log("correct answer:this.mapQuestAnswer[obj]: "+this.mapQuestAnswer[obj]);
    }
    
    let map = new Map();
    map.set("A","B");
    map.set("C","d");

    console.log(map.get("A")+" :"+ map.size);
    console.log("MAP JSON: "+JSON.stringify(map)); 
    map.forEach((value: string, key: string) => {
      console.log(key, value);
   });
   
    for(let [key, value] of map){
      console.log("for-of map" + key, value);
    }

    mapAnswers.forEach((value: string, key: string) => {
      console.log("mapAnswers: "+key, value);      
  });

    console.log("CORRECTANSWERS: "+correctAnswers);
    return correctAnswers;
  }
}
