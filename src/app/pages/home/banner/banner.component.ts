import { Component, HostListener, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { IBasicDetails } from 'src/types/AdminPageTypes';

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

  constructor (
    public commonService: CommonService
  ) {
    
  }

  @Input() data: IBasicDetails[] = []

  bannerBg = './assets/imgs/banner-md.png';

  slogan = 'ELEVATE YOUR BUSINESS, EMBRACE THE VIRTUAL FUTURE!';

  aboutUs = 'Welcome to Virtual Staff Avenue, where excellence meets virtual collaboration. We are a pioneering virtual staff business dedicated to connecting businesses with highly skilled remote professionals to streamline operations, enhance productivity, and catalyze growth. With our unwavering commitment to innovation and quality, we redefine the way businesses operate in a digital era, making geographical barriers a thing of the past.';

  bannerTxtClass = 'pr-n-800';

  bannerImgClass = 'pl-n-800';

  ngOnInit(): void {
    this.bannerBg = 'banner-bg'
    setTimeout(() => {
      this.bannerTxtClass = 'pr-0';
      this.bannerImgClass = 'pl-0';
    }, 100);

    this.initData();
  }

  initData = () => {
    this.bannerBg = this.data.find((row) => row.col_name === 'bannerImg')?.content || './assets/imgs/banner-md.png';

    this.slogan = this.data.find((row) => row.col_name === 'slogan')?.content || 'ELEVATE YOUR BUSINESS, EMBRACE THE VIRTUAL FUTURE!';

    this.aboutUs = this.data.find((row) => row.col_name === 'aboutUs')?.content || 'Welcome to Virtual Staff Avenue, where excellence meets virtual collaboration. We are a pioneering virtual staff business dedicated to connecting businesses with highly skilled remote professionals to streamline operations, enhance productivity, and catalyze growth. With our unwavering commitment to innovation and quality, we redefine the way businesses operate in a digital era, making geographical barriers a thing of the past.';
  }
}
