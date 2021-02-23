import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  hiring_datas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hiring_datas = [
      {
        title: 'Product Designer',
        location: 'New York, Dallas, Los Angeles, Denver, Chicago, Sao Paulo, San Francisco'
      },

      {
        title: 'Account Director',
        location: 'Hong Kong'
      },
      {
        title: 'DMP Data Engineer',
        location: 'Hong Kong, Chicago, Boston, San Francisco, Atlanta'
      },
      {
        title: 'Market Director',
        location: 'New York, Chicago, Miami'
      },
      {
        title: 'Staff Accountant',
        location: 'San Francisco'
      }
    ]
  }

}
