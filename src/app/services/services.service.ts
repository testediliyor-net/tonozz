import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IServiceCategory } from './types/IServiceCategory';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  async getCategories(): Promise<IServiceCategory[]> {
    return this.http.get<IServiceCategory[]>(environment.api_url + 'services/categories/').toPromise();
  }
}