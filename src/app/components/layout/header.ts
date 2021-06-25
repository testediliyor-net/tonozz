import { Component, EventEmitter, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(private auth: AuthService) { }

  get isAuth() {
    return this.auth.isAuth;
  }

  openLoginRegister(typ: string = '') {
    if (typ === 'login') {
      this.isOpenLoginModal = true;
      this.isOpenRegisterModal = false;
    } else if (typ === 'register') {
      this.isOpenLoginModal = false;
      this.isOpenRegisterModal = true;
    } else {
      this.isOpenLoginModal = false;
      this.isOpenRegisterModal = false;
    }
  }

  ngOnInit(): void {

    /**
     * Append Search Category Datas
     */
    this.categories = [
      {
        label: 'Services',
        value: 'Services'
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