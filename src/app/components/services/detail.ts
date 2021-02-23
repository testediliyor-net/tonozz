import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IDropdown } from 'src/app/utils/ui/dropdown';

@Component({
  selector: 'service-detail',
  templateUrl: './detail.html',
  encapsulation: ViewEncapsulation.None
})
export class ServiceDetailComponent implements OnInit {

  user: any = {};
  package_categories: IDropdown[];

  constructor() {
    this.user.name = 'JHON DOE';
    this.user.job = 'Yat Tamircisi';
    this.package_categories = <IDropdown[]>[
      { label: 'Package 1 (450 TL)', value: '1003' },
      { label: 'Package 2 (650 TL)', value: '1004' },
      { label: 'Package 3 (900 TL)', value: '1005' },
      { label: 'Package 4 (1100 TL)', value: '1006' },
    ]
  }

  ngOnInit(): void {
  }

}
