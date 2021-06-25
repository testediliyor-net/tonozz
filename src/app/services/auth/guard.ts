import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })
export class GuardServiceDemo implements CanActivate {
  constructor(
    private token: TokenStorageService,
    private auth: AuthService) { }

  canActivate(): boolean {
    return this.auth.isAuth;
  }

}