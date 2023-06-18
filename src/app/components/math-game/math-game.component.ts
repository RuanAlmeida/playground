import { CalcModel } from "src/app/models/calc.model";
import { Component, OnInit } from "@angular/core";
import { ActionsService } from "src/app/services/actions.service";
import {
  ARITHMETIC_OPERATION_ADDITION,
  ARITHMETIC_OPERATION_DIVISION,
  ARITHMETIC_OPERATION_MULTIPLICATION,
  ARITHMETIC_OPERATION_SUBTRACTION,
} from "src/app/utils/constants";

@Component({
  selector: "app-math-game",
  templateUrl: "./math-game.component.html",
  styleUrls: ["./math-game.component.scss"],
})
export class MathGameComponent implements OnInit {
  listCalculations: CalcModel[] = [];
  operationSing?: string;

  constructor(private actionsService: ActionsService) {}

  ngOnInit() {
    this.generateCalculations(ARITHMETIC_OPERATION_ADDITION);
    this.showResults();
    this.reloadCalculations();
    this.typeArithmeticOperation();
  }

  private generateCalculations(arithmeticOperationSign: string) {
    this.listCalculations = [];
    for (let index = 0; index < 20; index++) {
      const randomSmallNumbers = this.getRandomSmallNumbers();
      const randomBigNumbers = this.getRandomBigNumbers();
      this.listCalculations.push({
        smallNumber: randomSmallNumbers,
        bigNumber: randomBigNumbers,
        hiderNumber: Boolean(this.getRandomBooleanValue()),
        response: this.calculator(
          randomSmallNumbers,
          randomBigNumbers,
          arithmeticOperationSign
        ),
      });
    }
  }

  private showResults() {
    this.actionsService.showResultEventButton.subscribe((val) => {
      if (val) {
        this.listCalculations.forEach((el) => {
          if (el.responseReceived) {
            const calcOne = el.smallNumber + Number(el.responseReceived);
            const calcTwo = el.bigNumber + Number(el.responseReceived);
            const resultForResponse =
              calcOne === el.response || calcTwo === el.response;
            el.correctedCalculationIcon = resultForResponse ? "✅" : "❌";
          }
        });
      }
    });
  }

  private reloadCalculations() {
    this.actionsService.reloadCalculationsEvent.subscribe(
      (val) => val && this.generateCalculations(ARITHMETIC_OPERATION_ADDITION)
    );
  }

  private typeArithmeticOperation() {
    this.actionsService.typeArithmeticOperationEvent.subscribe((val) => {
      if (val) {
        this.generateCalculations(val);
      }
    });
  }

  private getRandomSmallNumbers(): number {
    return Math.floor(Math.random() * 10);
  }

  private getRandomBigNumbers(): number {
    return Math.floor(Math.random() * 100);
  }

  private getRandomBooleanValue(): number {
    return Math.floor(Math.random() * 2);
  }

  private calculator(
    valuaA: number,
    valueB: number,
    tipyOperetion: string
  ): number {
    if (ARITHMETIC_OPERATION_ADDITION === tipyOperetion) {
      this.operationSing = '+';
      return valuaA + valueB;
    } else if (ARITHMETIC_OPERATION_SUBTRACTION === tipyOperetion) {
      this.operationSing = '-';
      return valuaA - valueB;
    } else if (ARITHMETIC_OPERATION_MULTIPLICATION === tipyOperetion) {
      this.operationSing = 'x';
      return valuaA * valueB;
    } else if (ARITHMETIC_OPERATION_DIVISION === tipyOperetion) {
      this.operationSing = '÷';
      return valuaA / valueB;
    }
    return 0;
  }
}
