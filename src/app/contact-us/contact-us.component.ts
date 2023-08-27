import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      contactNumber: new FormControl(null),
      companyName: new FormControl(null),
      email: new FormControl(null, [
        Validators.required
      ]),
      subject: new FormControl(null, [
        Validators.required
      ]),
      body: new FormControl(null, [
        Validators.required
      ]),
    })
  }

}
