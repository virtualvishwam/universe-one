import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGOListPage } from './ngo-list.page';

const routes: Routes = [
  {
    path: '',
    component: NGOListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGOListPageRoutingModule {}
