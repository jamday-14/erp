import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubsidiaryPage } from './subsidiary';

@NgModule({
  declarations: [
    SubsidiaryPage,
  ],
  imports: [
    IonicPageModule.forChild(SubsidiaryPage),
  ],
})
export class SubsidiaryPageModule {}
