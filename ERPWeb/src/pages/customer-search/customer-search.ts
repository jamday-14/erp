import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the CustomerSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearchPage {
  customers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.initialize();
  }

  initialize(): any {
    this.customers = [
      'Jamal',
      'Jimmy',
      'Arnold',
      'Bryan'
    ];
  }
  
  getCustomers(ev) {
    // Reset items back to all of the items
    this.initialize();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.customers = this.customers.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  popPage(customer){
    this.events.publish('customer-events', customer);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerSearchPage');
  }

}
