import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  isLoading = false;

  errMsg = '';

  constructor(
    private authService: AuthService,
    private alertsService: AlertsService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [
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

      this.authService.addUser(this.form.value)
        .subscribe(
          (res) => {
            this.alertsService.triggerAlert({
              isHidden: false,
              msg: 'User successfully created!',
              type: 'success'
            })
            this.router.navigate(['/users']);
            this.isLoading = false;
            this.errMsg = '';
          },
          (err) => {
            // this.alertsService.triggerAlert({
            //   isHidden: false,
            //   msg: 'Unable to create user. Please try again later.',
            //   type: 'danger'
            // })
            this.isLoading = false;
            this.errMsg = err.error.msg;
          }
        )
    }
  };

}
