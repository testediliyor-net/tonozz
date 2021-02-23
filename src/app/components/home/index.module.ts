import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index';
import { CommonModule } from "@angular/common";
import { NewsletterComponent } from './newsletter';
import { SharedModule } from 'src/app/shared.module';
import { FormsModule } from '@angular/forms';
/**
 * Home Modules
 */

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      bodyClass: 'home-page-view'
    }
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    /** Set Current Routes */
    RouterModule.forChild(routes),

  ], //
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    NewsletterComponent,
  ],
  providers: [],
})
export class HomeModule { }
