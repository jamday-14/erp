import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryLedgerPage } from './inventory-ledger';

@NgModule({
  declarations: [
    InventoryLedgerPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryLedgerPage),
  ],
})
export class InventoryLedgerPageModule {}
