import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogLayout } from '../layout/blog';
import { BlogIndex } from '.';
import { BlogItem } from './components/blog-item';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BlogLayout,
    children: [
      {
        path: '',
        component: BlogIndex,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    /** Set Current Routes */
    RouterModule.forChild(routes),
  ],
  declarations: [
    BlogLayout,
    BlogIndex,
    BlogItem
  ],

  exports: [RouterModule]
})
export class BlogModule { }
