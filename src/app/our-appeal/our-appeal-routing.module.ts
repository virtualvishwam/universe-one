import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurAppealPage } from './our-appeal.page';

const routes: Routes = [
  {
    path: '',
    component: OurAppealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurAppealPageRoutingModule {}
