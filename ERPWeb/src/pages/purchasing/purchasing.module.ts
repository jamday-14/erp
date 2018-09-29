import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchasingPage } from './purchasing';

@NgModule({
  declarations: [
    PurchasingPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchasingPage),
  ],
})
export class PurchasingPageModule {}
