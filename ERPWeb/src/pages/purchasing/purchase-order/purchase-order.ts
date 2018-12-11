import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PurchaseOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-order',
  templateUrl: 'purchase-order.html',
})
export class PurchaseOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOrderPage');
  }

  activateMenu(): any {
    this.menu.enable(false, 'salesMenu');
    this.menu.enable(true, 'purchasingMenu');
  }
}
