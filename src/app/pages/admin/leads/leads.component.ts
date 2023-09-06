import { Component } from '@angular/core';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { ILeads } from 'src/types/AdminPageTypes';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {
  dataSource: ILeads[] = []

  displayedColumns = ['name', 'email', 'contact_number', 'company_name'];

  isLoading = true;

  constructor(
    private leadsService: LeadsService
  ) {
    this.fetchLeads();
  }
  
  fetchLeads = () => {
    this.leadsService.fetchLeads()
      .subscribe(
        (res) => {
          this.dataSource = res;
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
        }
      )
  }
}
