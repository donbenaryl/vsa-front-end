import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-problems-solutions',
  templateUrl: './problems-solutions.component.html',
  styleUrls: ['./problems-solutions.component.scss']
})
export class ProblemsSolutionsComponent {
  problemClass = 'pl-n-1200';
  solutionClass = 'pr-n-1200';

  @ViewChild('psContainer', {static: true}) _div: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400 && scrollServiceOffset <  250) {
        this.problemClass = 'pl-0';
        this.solutionClass = 'pr-0';
      }
      else if (scrollServiceOffset >=  250) {
        this.problemClass = 'pl-n-1200';
        this.solutionClass = 'pr-n-1200';
      }
      else {
        this.problemClass = 'pl-n-1200';
        this.solutionClass = 'pr-n-1200';
      }
  }

}
