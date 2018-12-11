import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillsPaymentPage } from './bills-payment';

@NgModule({
  declarations: [
    BillsPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(BillsPaymentPage),
  ],
})
export class BillsPaymentPageModule {}
