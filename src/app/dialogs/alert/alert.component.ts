import { Component, Input } from '@angular/core';
import { IAlert } from 'src/types/AlertTypes';

@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() data: IAlert = {
    msg: '',
    type: '',
    isHidden: true,
  };

  closeAlert = () => {
    this.data.isHidden = true;
  }
}
