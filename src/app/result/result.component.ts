import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  result: String;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.result = this.route.snapshot.paramMap.get("result");
  }
}
