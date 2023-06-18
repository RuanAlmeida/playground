import { Component, ElementRef, Renderer2 } from "@angular/core";
import { ActionsService } from "src/app/services/actions.service";

@Component({
  selector: "app-head-actions",
  templateUrl: "./head-actions.component.html",
  styleUrls: ["./head-actions.component.scss"],
})
export class HeadActionsComponent {

  constructor(
    private actionsService: ActionsService
    ) {}

  showResult() {
    this.actionsService.showResultEventButton.next(true);
  }

  reloadCalculations() {
    this.actionsService.reloadCalculationsEvent.next(true);
  }

  hendleTypeArithmeticOperationEvent(val: string){
    this.actionsService.typeArithmeticOperationEvent.next(val);
  }

}
