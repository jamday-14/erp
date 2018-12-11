import { Injectable } from '@angular/core';
import { MenuController } from 'ionic-angular';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Menu {

  constructor(public menu: MenuController) {
    
  }

  activateMenu(isSales, isPurchasing, isInventory, isAccounting, isReports, isMaintenance) {
    this.menu.enable(isSales, 'salesMenu');
    this.menu.enable(isPurchasing, 'purchasingMenu');
    this.menu.enable(isInventory, 'inventoryMenu');
    this.menu.enable(isAccounting, 'accountingMenu');
    this.menu.enable(isReports, 'reportsMenu');
    this.menu.enable(isMaintenance, 'maintenanceMenu');
  }

}
