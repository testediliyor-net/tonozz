import { Component, OnInit } from '@angular/core';
import { IBlogData } from './components/blog-item/models';

@Component({
  selector: 'blog-index',
  templateUrl: './index.html'
})

export class BlogIndex implements OnInit {

  datas: IBlogData[];

  constructor() { }

  ngOnInit() {

    this.datas = [
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image2.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image3.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image4.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
      {
        category: 'Lorem ipsum',
        imageURL: 'assets/images/blog-image2.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adi',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia in deserunt mollit anim id est sint laborum.',
        date: '10/12/2002'
      },
    ];

  }
}