import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable, Subject } from 'rxjs';
import { IBasicDetails, IHomePageData, ILeads, IPageDetails } from 'src/types/AdminPageTypes';

@Injectable({
  providedIn: 'root'
})
export class WebContentsService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  fetchBasicDetails(): Observable<IBasicDetails[]> {
    return this.http.get<IBasicDetails[]>(
      `${this.apiUrl}/web-contents/basic-details`,
      this.commonService.headerAuthorization()
    );
  }

  updateBasicDetails(data: IBasicDetails): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/basic-details`,
      data,
      this.commonService.headerAuthorization()
    );
  }

  fetchGoals(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/goals`,
      this.commonService.headerAuthorization()
    );
  }

  fetchServices(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/services`,
      this.commonService.headerAuthorization()
    );
  }

  fetchWhyUs(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/why-us`,
      this.commonService.headerAuthorization()
    );
  }

  fetchWhyOurServices(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/why-our-services`,
      this.commonService.headerAuthorization()
    );
  }

  fetchOurTeam(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/our-team`,
      this.commonService.headerAuthorization()
    );
  }

  fetchCareers(): Observable<IPageDetails[]> {
    return this.http.get<IPageDetails[]>(
      `${this.apiUrl}/web-contents/careers`,
      this.commonService.headerAuthorization()
    );
  }

  fetchCareer(id: string): Observable<IPageDetails> {
    return this.http.get<IPageDetails>(
      `${this.apiUrl}/web-contents/careers/${id}`,
      this.commonService.headerAuthorization()
    );
  }

  updateGoals(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/goals`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  updateServices(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/services`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  updateWhyUs(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/why-us`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  updateWhyOurServices(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/why-our-services`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  updateOurTeam(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/our-team`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  updateCareers(data: IPageDetails[]): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/web-contents/careers`,
      JSON.stringify(data),
      this.commonService.headerAuthorization()
    );
  }

  fetchHomePageData(): Observable<IHomePageData> {
    return this.http.get<IHomePageData>(
      `${this.apiUrl}/web-contents/home-page-data`,
      this.commonService.headerAuthorization()
    );
  }
}
