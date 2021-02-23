import { Component, OnInit } from '@angular/core';
import { ImageCardData } from '../../base/components/image-card';

@Component({
  selector: 'account-favorites',
  templateUrl: './favorites.html'
})

export class AccountFavorites implements OnInit {
  favorite_datas: ImageCardData[];
  constructor() { }

  ngOnInit() {
    this.favorite_datas = <ImageCardData[]>[
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }, {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
        isVisibleUser: true,
        image: 'assets/images/office-1209640_640.jpg',
        userName: 'John SMITH',
        userImage: 'assets/images/users/user-image.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      },
      {
        isVisibleHearth: true,
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