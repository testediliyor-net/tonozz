import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:1453/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login/', credentials, httpOptions);
  }

  register(options): Promise<any> {
    return this.http.post(AUTH_API + 'register/', options, httpOptions).toPromise();
  }

  async verifyToken(): Promise<any> {
    return this.http.post(AUTH_API + 'login/verify/', { "token": this.token.getToken() }).toPromise();
  }

  get isAuth(): boolean {
    return this.token.getToken() !== null;
  }
}