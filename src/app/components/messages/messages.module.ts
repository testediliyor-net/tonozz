import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from '.';


const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    /** Set Current Routes */
    RouterModule.forChild(routes),
  ]
})
export class MessagesModule { }
