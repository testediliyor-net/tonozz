import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/index.module').then(mod => mod.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./components/account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'account/settings',
    loadChildren: () => import('./components/account/settings.module').then(mod => mod.SettingsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/blog.module').then(mod => mod.BlogModule),
    data: {
      bodyClass: 'blog-page'
    }
  },
  {
    path: 'services',
    loadChildren: () => import('./components/services/services.module').then(mod => mod.ServicesModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(mod => mod.AboutModule),
    data: {
      bodyClass: 'about-page'
    }
  },
  {
    path: 'messages',
    loadChildren: () => import('./components/messages/messages.module').then(mod => mod.MessagesModule),
    data: {
      bodyClass: 'messages-page'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
