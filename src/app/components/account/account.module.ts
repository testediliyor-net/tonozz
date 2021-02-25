import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountOrders } from './orders/orders';
import { AccountLayout } from '../layout/account';
import { AccountHome } from '.';
import { AccountTocoin } from './tocoin/tocoin';
import { AccountRequests } from './requests/requests';
import { AccountFavorites } from './favorites/favorites';
import { AccountFinance } from './finance/finance';
import { AccountSales } from './sales/sales';
import { AccountPosts } from './posts/posts';
import { SharedModule } from 'src/app/shared.module';
import { GuardServiceDemo } from 'src/app/services/auth/guard';

const routes: Routes = [
  {
    path: '',
    component: AccountLayout,
    canActivate: [GuardServiceDemo],
    children: [
      {
        path: '',
        component: AccountHome,
        data: {
          bodyClass: 'account-index',
        },
      },
      {
        path: 'orders',
        component: AccountOrders,
        data: {
          bodyClass: 'account-orders'
        }
      },
      {
        path: 'tocoin',
        component: AccountTocoin,
        data: {
          bodyClass: 'account-tocoin'
        }
      },
      {
        path: 'requests',
        component: AccountRequests,
        data: {
          bodyClass: 'account-requests'
        }
      },
      {
        path: 'favorites',
        component: AccountFavorites,
        data: {
          bodyClass: 'account-favorites'
        }
      },
      {
        path: 'finance',
        component: AccountFinance,
        data: {
          bodyClass: 'account-finance'
        }
      },
      {
        path: 'sales',
        component: AccountSales,
        data: {
          bodyClass: 'account-sales'
        }
      },
      {
        path: 'posts',
        component: AccountPosts,
        data: {
          bodyClass: 'account-posts'
        }
      }
    ],
  },
  {
    path: 'account/settings',
    loadChildren: () => import('./settings.module').then(mod => mod.SettingsModule)
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
    AccountLayout,
    AccountHome,
    AccountOrders,
    AccountTocoin,
    AccountFavorites,
    AccountFinance,
    AccountSales,
    AccountPosts, AccountRequests
  ],

  exports: [RouterModule]
})
export class AccountModule { }
