import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysicalInventoryPage } from './physical-inventory';

@NgModule({
  declarations: [
    PhysicalInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysicalInventoryPage),
  ],
})
export class PhysicalInventoryPageModule {}
