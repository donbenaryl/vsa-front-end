import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

import {fromEvent} from 'rxjs';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @ViewChild('serviceContainer', {static: true}) _div: any;
  @ViewChild('whyOurServiceContainer', {static: true}) _div2: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // OUR SERVICES
      const serviceTopPosition = this._div.nativeElement.offsetTop;
      const scrollServiceOffset = scrollOffset - serviceTopPosition;
      
      if (scrollServiceOffset >=  -400 && scrollServiceOffset <  250) {
        this.serviceClass = 'pl-0';
      }
      else if (scrollServiceOffset >=  250) {
        this.serviceClass = 'pl-n-1200';
      }
      else {
        this.serviceClass = 'pl-n-1200';
      }

      // WHY OUR SERVICES
      const whyOurServiceTopPosition = this._div2.nativeElement.offsetTop;
      const scrollWhyOurServiceOffset = scrollOffset - whyOurServiceTopPosition;
      
      if (scrollWhyOurServiceOffset >=  -400) {
        this.whyOurServiceClass = 'pr-0';
      }
      else {
        this.whyOurServiceClass = 'pr-n-1200';
      }
  }

  serviceClass = 'pl-n-1200';

  whyOurServiceClass = 'pr-n-1200';

  whyOurServices: IDynamicFormData[] = [];

  services: IDynamicFormData[] = [];

  constructor(
    private webContentsService: WebContentsService,
  ) {
    this.fetchServices();
    this.fetchWhyOurServices();
  }

  ngOnInit(): void {
  }

  fetchServices = () => {
    this.webContentsService.fetchServices()
      .subscribe(
        (res) => {
          this.services = res;
        }
      )
  }

  fetchWhyOurServices = () => {
    this.webContentsService.fetchWhyOurServices()
      .subscribe(
        (res) => {
          this.whyOurServices = res;
        }
      )
  }

}
