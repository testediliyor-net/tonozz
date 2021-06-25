import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from 'src/app/services/lang.service';
import { ServicesService } from 'src/app/services/services.service';
import { IServiceCategory, IServiceSubCategory } from 'src/app/services/types/IServiceCategory';

@Component({
  selector: 'services',
  templateUrl: './index.html',
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

  servicesDatas: any[];
  categories: any[];
  servicesCategoryDatas: any[];

  constructor(
    private router: Router,
    private services: ServicesService,
    private lang: LangService
  ) { }

  showDetail() {
    this.router.navigate(['services/', 10])
  }

  async getCategories() {
    const categories: IServiceCategory[] = await this.services.getCategories();
    this.servicesCategoryDatas = categories.map((fn: IServiceCategory) => {
      return {
        ...fn,
        title: fn['category_name_' + this.lang.getCurrentCalture],
        children: fn.children.map((m: IServiceSubCategory) => {
          return {
            ...m,
            title: m['category_name_' + this.lang.getCurrentCalture]
          }
        })
      }
    });
    // })
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

    this.getCategories();

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
