import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  activateMenu(): any {
    this.menu.enable(false, 'salesMenu');
    this.menu.enable(false, 'purchasingMenu');
    this.menu.enable(false, 'inventoryMenu');
    this.menu.enable(false, 'accountingMenu');
    this.menu.enable(true, 'reportsMenu');
  }
}
