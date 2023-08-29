import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlert } from 'src/types/AlertTypes';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertTrigger = new Subject<IAlert>();

  alertTrigger$ = this.alertTrigger.asObservable();

  triggerAlert(data: IAlert) {
    this.alertTrigger.next(data);
  }
}
