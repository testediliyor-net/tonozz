import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LangService {

  get getCurrentCalture(): string {
    const calture: string = sessionStorage.getItem('tonozz-lang-calture');
    return calture || environment.default_calture || 'en';
  }
}