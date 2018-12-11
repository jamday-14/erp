import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubsidiaryLedgerPage } from './subsidiary-ledger';

@NgModule({
  declarations: [
    SubsidiaryLedgerPage,
  ],
  imports: [
    IonicPageModule.forChild(SubsidiaryLedgerPage),
  ],
})
export class SubsidiaryLedgerPageModule {}
