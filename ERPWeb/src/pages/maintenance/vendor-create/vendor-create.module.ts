import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorCreatePage } from './vendor-create';

@NgModule({
  declarations: [
    VendorCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(VendorCreatePage),
  ],
})
export class VendorCreatePageModule {}
