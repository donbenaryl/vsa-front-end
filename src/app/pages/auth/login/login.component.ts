import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  isLoggingIn = false;

  errMsg = '';
  
  passType = 'password';

  // oldPassIcon = faEyeSlash;
  
  oldPassType = 'password';

  // newPassIcon = faEyeSlash;
  
  newPassType = 'password';

  // rePassIcon = faEyeSlash;
  
  rePassType = 'password';

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private alertsService: AlertsService
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  submit = () => {
    if (this.form.valid) {
      this.isLoggingIn = true;

      this.authService
        .fetchToken(this.form.value)
        .subscribe(
          (res) => {
            this.isLoggingIn = false;
            if (res.token) {
              this.localStorageService.set('access_token', res.token);
              this.router.navigate(['/admin/basic-details']);
              this.authService.triggerLogin();

              this.errMsg = '';
            }
          },
          (err) => {
            this.isLoggingIn = false;
            this.errMsg = err.error.msg;
          }
        );
    }
  }

  showHidePassword(field: "" | "old_password" | "new_password" | "re_password" = "") {
    if (field === "") {
      this.passType = this.passType === 'password' ? 'text' : 'password';
      // this.passIcon = this.passIcon === faEye ? faEyeSlash : faEye;
    } else if (field === "old_password") {
      this.oldPassType = this.oldPassType === 'password' ? 'text' : 'password';
      // this.oldPassIcon = this.oldPassIcon === faEye ? faEyeSlash : faEye;
    } else if (field === "new_password") {
      this.newPassType = this.newPassType === 'password' ? 'text' : 'password';
      // this.newPassIcon = this.newPassIcon === faEye ? faEyeSlash : faEye;
    } else if (field === "re_password") {
      this.rePassType = this.rePassType === 'password' ? 'text' : 'password';
      // this.rePassIcon = this.rePassIcon === faEye ? faEyeSlash : faEye;
    }
  }
}
