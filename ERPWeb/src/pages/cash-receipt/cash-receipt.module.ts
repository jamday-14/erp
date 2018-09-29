import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashReceiptPage } from './cash-receipt';

@NgModule({
  declarations: [
    CashReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(CashReceiptPage),
  ],
})
export class CashReceiptPageModule {}
