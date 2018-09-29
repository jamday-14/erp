import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryAdjustmentPage } from './inventory-adjustment';

@NgModule({
  declarations: [
    InventoryAdjustmentPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryAdjustmentPage),
  ],
})
export class InventoryAdjustmentPageModule {}
