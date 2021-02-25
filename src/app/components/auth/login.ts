import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'login-modal',
  templateUrl: './login.html',
})

export class LoginComponent implements OnInit {

  @Output()
  onOpen = new EventEmitter<boolean>();

  closeModal() {
    this.onOpen.emit(false);
  }

  constructor(private router: Router) {
  }

  onLogin() {
    AppComponent.isAuthStatic = true;
    this.router.navigate(['account']);
    this.closeModal();
  }

  ngOnInit() {

  }
}