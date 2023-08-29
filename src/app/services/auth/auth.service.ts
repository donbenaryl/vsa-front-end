import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Observable, Subject } from 'rxjs';
import { IUser } from 'src/types/AuthTypes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  fetchToken(
    user: IUser
  ): Observable<any> {
    const query = (user.rememberMe) ? '?remember_me=True' : '';

    return this.http.post<any>(
      `${this.apiUrl}/login${query}`,
      {
        email: user.email,
        password: user.password
      },
      {
        headers: new HttpHeaders()
          .set('Content-Type',  `application/json`)
      }
    );
  }

  loginTrigger = new Subject<any>();

  loginTrigger$ = this.loginTrigger.asObservable();

  triggerLogin() {
    this.loginTrigger.next(1);
  }

  logoutTrigger = new Subject<any>();

  logoutTrigger$ = this.logoutTrigger.asObservable();

  triggerLogout() {
    this.logoutTrigger.next(1);
  }

  logout = () => {
    this.localStorageService.remove('access_token');
    this.router.navigate(['auth/login']);
    this.triggerLogout();
  };

  fetchCurrentUser(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/users/me`,
      this.commonService.headerAuthorization()
    );
  }

  isLoggedIn = async (): Promise<boolean> => new Promise((resolve, reject) => {
    this.fetchCurrentUser()
        .subscribe(
          (res) => {
            resolve(res)
          },
          (err) => {
            resolve(false)
          }
        );
  });
}
