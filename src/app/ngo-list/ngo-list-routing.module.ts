import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGOListPage } from './ngo-list.page';

const routes: Routes = [
  {
    path: '',
    component: NGOListPage
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NGOListPageRoutingModule {}
