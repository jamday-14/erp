import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryBalancePage } from './inventory-balance';

@NgModule({
  declarations: [
    InventoryBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryBalancePage),
  ],
})
export class InventoryBalancePageModule {}
