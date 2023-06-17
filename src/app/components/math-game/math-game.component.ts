import { Component, OnInit } from "@angular/core";
import { CalcModel } from "src/app/models/calc.model";
import { ActionsService } from "src/app/services/actions.service";

@Component({
  selector: "app-math-game",
  templateUrl: "./math-game.component.html",
  styleUrls: ["./math-game.component.scss"],
})
export class MathGameComponent implements OnInit {
  listCalculations: CalcModel[] = [];

  constructor(private actionsService: ActionsService) {}

  ngOnInit(): void {
    for (let index = 0; index < 20; index++) {
      const randomSmallNumbers = this.getRandomSmallNumbers();
      const randomBigNumbers = this.getRandomBigNumbers();
      this.listCalculations.push({
        smallNumber: randomSmallNumbers,
        bigNumber: randomBigNumbers,
        hiderNumber: Boolean(this.getRandomBooleanValue()),
        response: randomSmallNumbers + randomBigNumbers,
      });
    }

    this.actionsService.showResultEventButton.subscribe((val) => {
      this.listCalculations.forEach((el) => {
        if (el.responseReceived) {
          const calcOne = el.smallNumber + Number(el.responseReceived);
          const calcTwo = el.bigNumber + Number(el.responseReceived);
          const resultForResponse =
            calcOne === el.response || calcTwo === el.response;
          el.correctedCalculationIcon = resultForResponse ? "✅" : "❌";
        }
      });
    });
  }

  getRandomSmallNumbers(): number {
    return Math.floor(Math.random() * 10);
  }

  getRandomBigNumbers(): number {
    return Math.floor(Math.random() * 100);
  }

  getRandomBooleanValue(): number {
    return Math.floor(Math.random() * 2);
  }
}
