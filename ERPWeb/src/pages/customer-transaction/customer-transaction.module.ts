import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerTransactionPage } from './customer-transaction';

@NgModule({
  declarations: [
    CustomerTransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerTransactionPage),
  ],
})
export class CustomerTransactionPageModule {}
