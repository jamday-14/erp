import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }

  activateMenu(): any {
    this.menu.enable(false, 'salesMenu');
    this.menu.enable(false, 'purchasingMenu');
    this.menu.enable(true, 'inventoryMenu');
    this.menu.enable(false, 'accountingMenu');
    this.menu.enable(false, 'reportsMenu');
  }

}
