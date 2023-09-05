import { Component, HostListener, ViewChild } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';

@Component({
  selector: 'app-problems-solutions',
  templateUrl: './problems-solutions.component.html',
  styleUrls: ['./problems-solutions.component.scss']
})
export class ProblemsSolutionsComponent {
  problemClass = 'pl-n-1200';
  solutionClass = 'pr-n-1200';

  problem = '';
  solution = '';

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

  constructor(
    private webContentsService: WebContentsService,
  ) {
    this.fetchBasicDetails();
  }

  fetchBasicDetails = () => {
    this.webContentsService.fetchBasicDetails()
      .subscribe(
        (res) => {
          const problem = res.find((row) => row.col_name === 'problem')
          this.problem = problem?.content || '';

          const solution = res.find((row) => row.col_name === 'solution')
          this.solution = solution?.content || '';
        }
      )
  }

}
