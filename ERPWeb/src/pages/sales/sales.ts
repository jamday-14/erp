import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Component } from '@angular/core';


/**
 * Generated class for the SalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})

export class SalesPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }

  activateMenu(): any {
    this.menu.enable(true, 'salesMenu');
    this.menu.enable(false, 'purchasingMenu');
    this.menu.enable(false, 'inventoryMenu');
    this.menu.enable(false, 'accountingMenu');
    this.menu.enable(false, 'reportsMenu');
  }

}
