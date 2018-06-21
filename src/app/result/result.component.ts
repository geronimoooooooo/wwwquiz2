import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  rightQuestions: number;
  totalQuestions: number;
  message: any;
  wrongQuestions: any;
  hasWrongQuestions: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let obj =  JSON.parse(this.route.snapshot.paramMap.get("result"));
    this.rightQuestions = obj.result.rightQuests;
    this.totalQuestions = obj.result.totalQuests;
    this.wrongQuestions = obj.result.wrongQuests;
    this.hasWrongQuestions = this.wrongQuestions.length > 0;

    let ratio = this.rightQuestions/this.totalQuestions;
    if (ratio < 0.5) {
      this.message = "You can do better. Maybe try again.";
    } else if (ratio < 0.8) {
      this.message = "Solid understanding of the topic. Good Job!"
    } else {
      this.message = "You are an expert";
    }
  }
}
