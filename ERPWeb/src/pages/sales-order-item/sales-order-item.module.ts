import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesOrderItemPage } from './sales-order-item';

@NgModule({
  declarations: [
    SalesOrderItemPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesOrderItemPage),
  ],
})
export class SalesOrderItemPageModule {}
