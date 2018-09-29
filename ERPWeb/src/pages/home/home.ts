import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.activateMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  activateMenu(): any {
    this.menu.enable(false, 'salesMenu');
    this.menu.enable(false, 'purchasingMenu');
  }

  goto(page: string){
    this.navCtrl.setRoot(page);
  }

}
