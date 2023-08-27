import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  constructor(public dialog: MatDialog) {}

  showContactForm = () => {
    this.dialog.open(ContactUsComponent, {
      // width: '80%',
      maxWidth: '500px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
