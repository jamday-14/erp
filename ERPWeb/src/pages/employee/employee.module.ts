import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeePage } from './employee';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    EmployeePage
  ],
  imports: [
    IonicPageModule.forChild(EmployeePage),
    ComponentsModule
  ],
})
export class EmployeePageModule {}
