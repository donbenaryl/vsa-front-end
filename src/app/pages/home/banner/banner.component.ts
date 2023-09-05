import { Component, HostListener } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';

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

  bannerBg = './assets/imgs/banner-md.png';

  slogan = 'ELEVATE YOUR BUSINESS, EMBRACE THE VIRTUAL FUTURE!';

  aboutUs = 'Welcome to Virtual Staff Avenue, where excellence meets virtual collaboration. We are a pioneering virtual staff business dedicated to connecting businesses with highly skilled remote professionals to streamline operations, enhance productivity, and catalyze growth. With our unwavering commitment to innovation and quality, we redefine the way businesses operate in a digital era, making geographical barriers a thing of the past.';

  bannerTxtClass = 'pr-n-800';

  bannerImgClass = 'pl-n-800';

  constructor(
    private webContentsService: WebContentsService,
  ) {
  }

  ngOnInit(): void {
    this.bannerBg = 'banner-bg'
    setTimeout(() => {
      this.bannerTxtClass = 'pr-0';
      this.bannerImgClass = 'pl-0';
    }, 100);

    this.fetchBasicDetails();
  }

  fetchBasicDetails = () => {
    this.webContentsService.fetchBasicDetails()
      .subscribe(
        (res) => {
          const bannerBg = res.find((row) => row.col_name === 'bannerImg')
          this.bannerBg = bannerBg?.content || './assets/imgs/banner-md.png';

          const slogan = res.find((row) => row.col_name === 'slogan')
          this.slogan = slogan?.content || '';

          const aboutUs = res.find((row) => row.col_name === 'aboutUs')
          this.aboutUs = aboutUs?.content || '';
        },
        (err) => {

        }
      )
  }
}
