import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  showResultEventButton = new BehaviorSubject(false);

  reloadCalculationsEvent = new BehaviorSubject(false);

  typeArithmeticOperationEvent = new BehaviorSubject('');

  constructor() { }
}
