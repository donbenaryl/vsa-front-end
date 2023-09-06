import { Component } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  careers: IDynamicFormData[] = []

  isLoading = true;

  constructor(
    private webContentsService: WebContentsService,
  ) {
    this.fetchData();
  }

  fetchData() {
    this.webContentsService.fetchCareers()
      .subscribe(
        (res) => {
          this.careers = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
        }
      )
  }
}
