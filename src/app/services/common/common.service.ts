import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  capitalize(s: string)
  {
    if (s.length > 0) {
      return s[0].toUpperCase() + s.slice(1);
    }

    return '';
  }

  wait = (ms: number) => {
    const start = new Date().getTime();
    let end = start;

    while (end < start + ms) {
      end = new Date().getTime();
    }
  };

  headerAuthorization = () => ({
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${localStorage.getItem('access_token')}`)
  });

  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
}
