import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLayout } from '../layout/account/settings';
import { SettingsGeneral } from './settings/general';
import { SettingsBanks } from './settings/banks';
import { SettingsSecurity } from './settings/security';
import { SettingsNotification } from './settings/notification';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
  {
    path: "",
    component: SettingsLayout,
    children: [
      {
        path: "general",
        component: SettingsGeneral
      },
      {
        path: "bank-and-payment",
        component: SettingsBanks
      },
      {
        path: "security",
        component: SettingsSecurity
      },
      {
        path: "notification-settings",
        component: SettingsNotification
      }
    ]
  }
]

@NgModule({
  declarations: [
    SettingsLayout,
    SettingsGeneral
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
