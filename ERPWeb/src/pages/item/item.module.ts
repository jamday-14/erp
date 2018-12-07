import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemPage } from './item';
import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    ItemPage,
    ExpandableComponent
  ],
  imports: [
    IonicPageModule.forChild(ItemPage),
  ],
})

export class ItemPageModule {}
