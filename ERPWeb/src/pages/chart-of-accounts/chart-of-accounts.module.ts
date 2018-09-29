import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartOfAccountsPage } from './chart-of-accounts';

@NgModule({
  declarations: [
    ChartOfAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartOfAccountsPage),
  ],
})
export class ChartOfAccountsPageModule {}
