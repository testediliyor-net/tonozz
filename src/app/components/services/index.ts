import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

  servicesDatas: any[];
  categories: any[];
  serviceCategoryDatas: any[];

  constructor() {
  }

  ngOnInit(): void {


    this.servicesDatas = [
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: false },
      { sponsored: true },
      { sponsored: true },
      { sponsored: true },
      { sponsored: true },
    ].sort((a: any, b: any) => { return b.sponsored - a.sponsored });

    this.serviceCategoryDatas = [
      {
        title: 'Lorem ipsum',
        datas: [
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
        ]
      }, {
        title: 'Lorem ipsum',
        datas: [
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
        ]
      }, {
        title: 'Lorem ipsum',
        datas: [
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
          { title: 'Lorem ipsum dolor' },
        ]
      }
    ]

    this.categories = [
      {
        label: 'Ranking',
        value: 'Ranking'
      },
      {
        label: 'Ranking 2',
        value: 'Ranking 2'
      }];
  }

}
