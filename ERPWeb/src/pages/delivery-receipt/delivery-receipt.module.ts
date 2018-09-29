import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryReceiptPage } from './delivery-receipt';

@NgModule({
  declarations: [
    DeliveryReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryReceiptPage),
  ],
})
export class DeliveryReceiptPageModule {}
