import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vsa';

  isLoggedIn: any = false;

  email = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.checkIfLoggedIn();
      }
    });
  }

  checkIfLoggedIn = async () => {
    this.isLoggedIn = await this.authService.isLoggedIn();
    console.log("this.router.url",  !this.isLoggedIn && this.router.url.includes('admin'))

    // IF LOGGED OUT AND IS IN ADMIN PAGE
    if (!this.isLoggedIn) {
      if (this.router.url.includes('admin')) {
        this.router.navigate(['/auth/login']);
      }
    } else {
      this.email = this.isLoggedIn.email;
      if (this.router.url === '/auth/login') {
        this.router.navigate(['/admin/basic-details']);
      }
    }
  }
}
