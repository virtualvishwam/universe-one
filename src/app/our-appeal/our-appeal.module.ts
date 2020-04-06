import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurAppealPageRoutingModule } from './our-appeal-routing.module';

import { OurAppealPage } from './our-appeal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurAppealPageRoutingModule
  ],
  declarations: [OurAppealPage]
})
export class OurAppealPageModule {}
