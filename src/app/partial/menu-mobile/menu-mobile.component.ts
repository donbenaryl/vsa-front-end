import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  @Input() isLoggedIn: any;

  constructor(
    private authService: AuthService
  ) {
  }

  logout = () => {
    this.authService.logout()
  };
}
