import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sub = this.route.snapshot.params['sub'];

  constructor(
    private route:  ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router:  Router,
  ) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.scrollTo() )
  }

  ngOnInit(): void {
    this.scrollTo();
  }

  scrollTo = () => {
    this.sub = this.route.snapshot.params['sub'] ? this.route.snapshot.params['sub'] : '';
    
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: `#${this.sub}`
    })
  }


}
