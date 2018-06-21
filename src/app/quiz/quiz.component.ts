import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quiz } from "../quiz";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Quiz[]>("https://kohlmeise.cosy.sbg.ac.at/app/quizzes/")
      .subscribe((data: any) => {
        this.quizzes = data.quizzes;
      });
  }
}
