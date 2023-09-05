import { Component, HostListener, ViewChild } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss']
})
export class MissionVisionComponent {
  mvClass = 'pr-n-1200';

  mission = '';
  missionImg = '';

  vision = '';
  visionImg = '';
  
  goals: IDynamicFormData[] = [];
  goalsImg = '';

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

  constructor(
    private webContentsService: WebContentsService,
  ) {
    this.fetchBasicDetails();
    this.fetchGoals();
  }

  fetchBasicDetails = () => {
    this.webContentsService.fetchBasicDetails()
      .subscribe(
        (res) => {
          const mission = res.find((row) => row.col_name === 'mission')
          this.mission = mission?.content || '';

          const missionImg = res.find((row) => row.col_name === 'missionImg')
          this.missionImg = missionImg?.content || '';

          const vision = res.find((row) => row.col_name === 'vision')
          this.vision = vision?.content || '';

          const visionImg = res.find((row) => row.col_name === 'visionImg')
          this.visionImg = visionImg?.content || '';

          const goalsImg = res.find((row) => row.col_name === 'goalsImg')
          this.goalsImg = goalsImg?.content || '';
        }
      )
  }

  fetchGoals = () => {
    this.webContentsService.fetchGoals()
      .subscribe(
        (res) => {
          this.goals = res;
        }
      )
  }

}
