import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
