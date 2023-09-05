import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable, Subject } from 'rxjs';
import { IBasicDetails, IEmails, ILeads, IPageDetails } from 'src/types/AdminPageTypes';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
  ) { }

  fetchLeads(): Observable<ILeads[]> {
    return this.http.get<ILeads[]>(
      `${this.apiUrl}/leads`,
      this.commonService.headerAuthorization()
    );
  }

  sendEmail(data: IEmails): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/leads`,
      data,
      this.commonService.headerAuthorization()
    );
  }
}
