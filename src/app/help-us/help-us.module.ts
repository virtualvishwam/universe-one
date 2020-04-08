import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpUsPageRoutingModule } from './help-us-routing.module';

import { HelpUsPage } from './help-us.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpUsPageRoutingModule
  ],
  declarations: [HelpUsPage],
  providers: [InAppBrowser]
})
export class HelpUsPageModule {}
