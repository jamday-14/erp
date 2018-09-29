import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PurchasingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchasing',
  templateUrl: 'purchasing.html',
})
export class PurchasingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasingPage');
  }

  activateMenu(): any {
    this.menu.enable(false, 'salesMenu');
    this.menu.enable(true, 'purchasingMenu');
    this.menu.enable(false, 'inventoryMenu');
    this.menu.enable(false, 'accountingMenu');
    this.menu.enable(false, 'reportsMenu');
  }

}
