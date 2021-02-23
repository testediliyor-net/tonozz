import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '.';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { ServiceDetailComponent } from './detail';


const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    data: {
      bodyClass: 'services-view-page'
    },
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: ServiceDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    /** Set Current Routes */
    RouterModule.forChild(routes),
  ],
  declarations: [
    ServicesComponent,
    ServiceDetailComponent
  ]
})
export class ServicesModule { }
