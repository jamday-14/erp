import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CustomerTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-transaction',
  templateUrl: 'customer-transaction.html',
})
export class CustomerTransactionPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerTransactionPage');
  }

}
