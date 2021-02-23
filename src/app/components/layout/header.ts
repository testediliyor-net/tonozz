import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'header-component',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {
  isVisibleMobileMenu: boolean;
  categories: any[];
  isOpenUserModal: boolean;
  isOpenLoginModal: boolean;
  isOpenRegisterModal: boolean;

  openLoginModal(status: boolean) {
    this.isOpenLoginModal = status;
  }

  openRegisterModal(status: boolean) {
    this.isOpenRegisterModal = status;
  }

  constructor() { }

  ngOnInit(): void {

    /**
     * Append Search Category Datas
     */
    this.categories = [
      {
        label: 'Services',
        value: 'Services'
      },
      {
        label: 'Job Offers',
        value: 'Job Offers'
      }];

  }

  scrollDown() {
    AppComponent.isBrowser.subscribe(browser => {
      if (browser) {
        const jeFeaturedProducts: HTMLElement = document.querySelector('.je-featured-products');
        if (!jeFeaturedProducts) return;
        window.scroll({
          top: jeFeaturedProducts.offsetTop - 40,
          left: 0,
          behavior: 'smooth'
        });
      }
    })
  }
}