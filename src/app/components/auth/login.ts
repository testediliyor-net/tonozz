import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {

  }
}