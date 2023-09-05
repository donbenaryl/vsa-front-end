import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBasicDetails } from 'src/types/AdminPageTypes';
import { AlertsService } from '../services/alerts/alerts.service';
import { LeadsService } from '../services/leads/leads.service';
import { WebContentsService } from '../services/web-contents/web-contents.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  form: FormGroup;

  basicDetails: IBasicDetails[] = [];

  contactNumPh = '';
  contactNumUk = '';
  contactNumUs = '';

  isSending = false;

  constructor(
    private leadsService: LeadsService,
    private alertsService: AlertsService,
    private webContentsService: WebContentsService,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ]),
      contact_number: new FormControl(null,
        Validators.maxLength(250)),
      company_name: new FormControl(null,
        Validators.maxLength(250)),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.maxLength(250)
      ]),
      subject: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ]),
      body: new FormControl(null, [
        Validators.required,
        Validators.maxLength(2000)
      ]),
      sent_to: new FormControl('info@azie-don.com', [
        Validators.required
      ]),
    })

    this.fetchData();
  }

  fetchData() {
    this.webContentsService.fetchBasicDetails()
      .subscribe(
        (res) => {
          const contactNumPh = res.find((row) => row.col_name === 'contactNumPh')
          this.contactNumPh = contactNumPh?.content || '';

          const contactNumUk = res.find((row) => row.col_name === 'contactNumUk')
          this.contactNumUk = contactNumUk?.content || '';

          const contactNumUs = res.find((row) => row.col_name === 'contactNumUs')
          this.contactNumUs = contactNumUs?.content || '';
        },
        (err) => {
        }
      )
  }

  sendEmail = () => {
    if (this.form.valid) {
      this.isSending = true;

      this.leadsService.sendEmail(this.form.value)
        .subscribe(
          (res) => {
            this.alertsService.triggerAlert({
              isHidden: false,
              msg: 'Your mail has been sent successfully!',
              type: 'success'
            })
            this.isSending = false;
            this.dialog.closeAll();
          },
          (err) => {
            this.alertsService.triggerAlert({
              isHidden: false,
              msg: 'Unable to send email. Please try again later.',
              type: 'danger'
            })
            this.isSending = false;
          }
        )
    }
  }
}
