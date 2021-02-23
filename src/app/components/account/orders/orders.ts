import { Component, OnInit } from '@angular/core';
import { ImageCardData } from '../../base/components/image-card';

@Component({
  selector: 'account-orders',
  templateUrl: './orders.html'
})

export class AccountOrders implements OnInit {
  orders_data: ImageCardData[];
  constructor() { }

  ngOnInit() {
    this.orders_data = <ImageCardData[]>[
      {
        image: 'assets/images/office-1209640_640.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }, {
        image: 'assets/images/office-1209640_640.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }, {
        image: 'assets/images/office-1209640_640.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }, {
        image: 'assets/images/office-1209640_640.jpg',
        title: 'Lorem ipsum dolor sit amet',
        price: '$999'
      }
    ]
  }
}