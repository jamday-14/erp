import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournalVoucherPage } from './journal-voucher';

@NgModule({
  declarations: [
    JournalVoucherPage,
  ],
  imports: [
    IonicPageModule.forChild(JournalVoucherPage),
  ],
})
export class JournalVoucherPageModule {}
