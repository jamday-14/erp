import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashReceiptVoucherPage } from './cash-receipt-voucher';

@NgModule({
  declarations: [
    CashReceiptVoucherPage,
  ],
  imports: [
    IonicPageModule.forChild(CashReceiptVoucherPage),
  ],
})
export class CashReceiptVoucherPageModule {}
