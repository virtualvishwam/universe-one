import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceLinksPageRoutingModule } from './resource-links-routing.module';

import { ResourceLinksPage } from './resource-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceLinksPageRoutingModule
  ],
  declarations: [ResourceLinksPage]
})
export class ResourceLinksPageModule {}
