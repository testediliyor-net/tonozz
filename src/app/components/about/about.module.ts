import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '.';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    /** Set Current Routes */
    RouterModule.forChild(routes),
  ]
})
export class AboutModule { }
