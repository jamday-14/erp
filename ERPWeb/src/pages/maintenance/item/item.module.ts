import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemPage } from './item';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ItemPage
  ],
  imports: [
    IonicPageModule.forChild(ItemPage),
    ComponentsModule
  ],
})

export class ItemPageModule {}
