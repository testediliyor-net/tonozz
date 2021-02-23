import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'base-newsletter',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class BaseNewsletter implements OnInit {
  isOpenModal: boolean;

  openModal() {
    this.isOpenModal = true;
  }

  closeModal() {
    this.isOpenModal = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
