import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrialBalancePage } from './trial-balance';

@NgModule({
  declarations: [
    TrialBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(TrialBalancePage),
  ],
})
export class TrialBalancePageModule {}
