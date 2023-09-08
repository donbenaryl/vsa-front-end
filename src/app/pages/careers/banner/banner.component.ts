import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (scrollOffset >= 250) {
        this.bannerImgClass = 'pl-n-800';
        this.bannerTxtClass = 'pr-n-800';
      } else {
        this.bannerImgClass = 'pl-0';
        this.bannerTxtClass = 'pr-0';
      }
  }

  bannerBg = '';

  bannerTxtClass = 'pr-n-800';

  bannerImgClass = 'pl-n-800';

  ngOnInit(): void {
    this.bannerBg = 'banner-bg'
    setTimeout(() => {
      this.bannerTxtClass = 'pr-0';
      this.bannerImgClass = 'pl-0';
    }, 100);
  }

}
