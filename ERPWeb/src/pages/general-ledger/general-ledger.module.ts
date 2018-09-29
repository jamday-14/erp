import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralLedgerPage } from './general-ledger';

@NgModule({
  declarations: [
    GeneralLedgerPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralLedgerPage),
  ],
})
export class GeneralLedgerPageModule {}
