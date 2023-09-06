import { Component } from '@angular/core';
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
    private webContentsService: WebContentsService
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
