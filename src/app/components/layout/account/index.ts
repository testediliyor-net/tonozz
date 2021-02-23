import { Component, OnInit } from '@angular/core';
import { ImageCardData } from '../../base/components/image-card';

@Component({
  selector: 'account-layout',
  templateUrl: './index.html'
})

export class AccountLayout implements OnInit {

  populer_datas: ImageCardData[];

  constructor() { }

  ngOnInit() {
    this.populer_datas = <ImageCardData[]>[
      {
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }, {
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }
    ]
  }
}