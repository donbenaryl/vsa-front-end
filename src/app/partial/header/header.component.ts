import { Component, HostListener, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isLoggedIn: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (scrollOffset >= 100) {
          document.querySelectorAll('header').forEach((c) => {
              c.classList.add('header-with-background');
          });
      } else {
          document.querySelectorAll('header').forEach((c) => {
              c.classList.remove('header-with-background');
          });
      }
  }
}
