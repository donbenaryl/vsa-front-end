import { Component } from '@angular/core';
import { WebContentsService } from 'src/app/services/web-contents/web-contents.service';
import { IDynamicFormData } from 'src/types/AdminPageTypes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  isLoading = true;

  career: IDynamicFormData = {
    id: 0,
    title: '',
    description: '',
    location: '',
  };

  constructor(
    private webContentsService: WebContentsService,
    private route: ActivatedRoute
  ) {
    this.fetchData();
  }

  fetchData = () => {
    this.webContentsService.fetchCareer(this.route.snapshot.paramMap.get('id') || '0')
      .subscribe(
        (res) => {
          this.career = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
        }
      )
  }
}
