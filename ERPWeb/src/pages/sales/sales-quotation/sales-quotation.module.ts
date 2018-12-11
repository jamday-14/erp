import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesQuotationPage } from './sales-quotation';

@NgModule({
  declarations: [
    SalesQuotationPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesQuotationPage),
  ],
})
export class SalesQuotationPageModule {}
