import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Injectable({ providedIn: 'root' })
export class GuardServiceDemo implements CanActivate {
  constructor() {

  }

  canActivate(): boolean {
    return AppComponent.isAuthStatic = true;
  }

}