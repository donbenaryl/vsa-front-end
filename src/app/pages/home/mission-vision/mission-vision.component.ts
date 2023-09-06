import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { IDynamicFormData, IHomePageData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss']
})
export class MissionVisionComponent {
  @Input() data: IHomePageData = {
    basic_details: [],
    goals: [],
    services: [],
    why_our_services: [],
    why_us: []
  }

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

  ngOnInit(): void {
    this.initData();
  }

  initData = () => {
    const mission = this.data.basic_details.find((row) => row.col_name === 'mission')
    this.mission = mission?.content || '';

    const missionImg = this.data.basic_details.find((row) => row.col_name === 'missionImg')
    this.missionImg = missionImg?.content || '';

    const vision = this.data.basic_details.find((row) => row.col_name === 'vision')
    this.vision = vision?.content || '';

    const visionImg = this.data.basic_details.find((row) => row.col_name === 'visionImg')
    this.visionImg = visionImg?.content || '';

    const goalsImg = this.data.basic_details.find((row) => row.col_name === 'goalsImg')
    this.goalsImg = goalsImg?.content || '';

    this.goals = this.data.goals;
  }

}
