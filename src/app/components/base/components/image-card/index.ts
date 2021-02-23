import { Component, Input, OnInit } from '@angular/core';

export interface ImageCardData {
  isVisibleHearth: boolean;
  isVisibleUser: boolean;
  image: string;
  userImage: string;
  userName: string;
  price: string;
  title: string;
}

@Component({
  selector: 'image-card',
  templateUrl: 'index.html'
})

export class ImageCard implements OnInit {
  @Input() data: ImageCardData;
  constructor() {

  }

  ngOnInit() { }
}