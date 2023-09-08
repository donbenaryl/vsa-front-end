import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  wuClass = 'pr-n-1200';
  @Input() whyUs: IDynamicFormData[] = [];

  @ViewChild('wuContainer', {static: true}) _div: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400) {
        this.wuClass = 'pl-0';
      }
      else {
        this.wuClass = 'pl-n-1200';
      }
  }

  constructor (public commonService: CommonService) {}
}
