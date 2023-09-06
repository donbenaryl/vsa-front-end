import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form: FormGroup;

  isLoading = false;

  errMsg = '';

  constructor(
    private authService: AuthService,
    private alertsService: AlertsService,
    private router: Router
  ) {
    this.form = new FormGroup({
      old_password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      new_password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      re_password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
    })
  }

  save = () => {
    if (this.form.valid) {
      this.isLoading = true;

      this.authService.changePassword(this.form.value)
        .subscribe(
          (res) => {
            this.alertsService.triggerAlert({
              isHidden: false,
              msg: 'Password successfully updated. Please login again.',
              type: 'success'
            })
            this.isLoading = false;
            this.errMsg = '';

            this.authService.logout();
          },
          (err) => {
            this.isLoading = false;
            this.errMsg = err.error.msg;
          }
        )
    }
  };

}
