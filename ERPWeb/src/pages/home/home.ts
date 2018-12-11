import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from '../../providers';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: Menu) {
    this.menu.activateMenu(false, false, false, false, false, false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  goto(page: string){
    this.navCtrl.setRoot(page);
  }

}
