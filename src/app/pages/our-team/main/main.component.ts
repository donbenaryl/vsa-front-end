import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IPageDetails } from 'src/types/AdminPageTypes';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isLoading = true;

  team: IPageDetails[] = [];

  constructor(
    private webContentsService: WebContentsService,
    public commonService: CommonService
  ) {
    this.fetchData();
  }

  fetchData = () => {
    this.webContentsService.fetchOurTeam()
      .subscribe(
        (res) => {
          this.team = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
        }
      )
  }
}
