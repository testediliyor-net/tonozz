import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageCardData } from '../../base/components/image-card';

@Component({
  selector: 'account-posts',
  templateUrl: './posts.html',
  encapsulation: ViewEncapsulation.None
})
export class AccountPosts implements OnInit {
  post_datas: ImageCardData[];
  constructor() { }

  ngOnInit(): void {
    this.post_datas = <ImageCardData[]>[
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
