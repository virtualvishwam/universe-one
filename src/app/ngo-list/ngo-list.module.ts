import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NGOListPageRoutingModule } from './ngo-list-routing.module';

import { NGOListPage } from './ngo-list.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NGOListPageRoutingModule
  ],
  declarations: [NGOListPage],
  providers: [
    InAppBrowser
  ]
})
export class NGOListPageModule {}
