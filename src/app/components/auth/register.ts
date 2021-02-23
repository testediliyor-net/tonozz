import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'register-modal',
  templateUrl: './register.html',
})

export class RegisterComponent implements OnInit {

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