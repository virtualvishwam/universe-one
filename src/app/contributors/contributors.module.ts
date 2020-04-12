import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributorsPageRoutingModule } from './contributors-routing.module';

import { ContributorsPage } from './contributors.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributorsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ContributorsPage]
})
export class ContributorsPageModule {}
