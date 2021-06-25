import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getUser(): Promise<any> {
    return this.http.get(environment.api_url + 'all', { responseType: 'text' }).toPromise();
  }
}