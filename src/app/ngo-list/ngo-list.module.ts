import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NGOListPageRoutingModule } from './ngo-list-routing.module';

import { NGOListPage } from './ngo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NGOListPageRoutingModule
  ],
  declarations: [NGOListPage]
})
export class NGOListPageModule {}
