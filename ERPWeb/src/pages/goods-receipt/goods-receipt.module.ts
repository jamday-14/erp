import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsReceiptPage } from './goods-receipt';

@NgModule({
  declarations: [
    GoodsReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsReceiptPage),
  ],
})
export class GoodsReceiptPageModule {}
