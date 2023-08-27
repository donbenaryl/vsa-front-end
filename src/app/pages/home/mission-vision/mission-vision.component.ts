import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss']
})
export class MissionVisionComponent {
  mvClass = 'pr-n-1200';

  @ViewChild('mvContainer', {static: true}) _div: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400 && scrollServiceOffset <  250) {
        this.mvClass = 'pr-0';
      }
      else if (scrollServiceOffset >=  250) {
        this.mvClass = 'pr-n-1200';
      }
      else {
        this.mvClass = 'pr-n-1200';
      }
  }

}
