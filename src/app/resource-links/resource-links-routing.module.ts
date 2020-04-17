import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceLinksPage } from './resource-links.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceLinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceLinksPageRoutingModule {}
