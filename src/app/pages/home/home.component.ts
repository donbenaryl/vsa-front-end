import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {delay} from 'utils-decorators';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IHomePageData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = true;

  data: IHomePageData = {
    basic_details: [],
    goals: [],
    services: [],
    why_our_services: [],
    why_us: []
  }

  sub = this.route.snapshot.params['sub'];

  constructor(
    private route:  ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router:  Router,
    private webContentsService: WebContentsService
  ) {
    // router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.scrollTo() )
  }

  ngOnInit(): void {
    this.fetchData();
    // this.scrollTo();
  }

  @delay(1)
  scrollTo() {
    this.sub = this.route.snapshot.params['sub'] ? this.route.snapshot.params['sub'] : '';

    if (this.sub) {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: `#${this.sub}`
      })
    }
  }

  fetchData = () => {
    this.webContentsService.fetchHomePageData()
      .subscribe(
        (res) => {
          this.data = res;
          this.isLoading = false;
          this.scrollTo();
        },
        (err) => {
          this.isLoading = true;
        }
      )
  }


}
