import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ItemSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-search',
  templateUrl: 'item-search.html',
})
export class ItemSearchPage {

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.initialize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemSearchPage');
  }

  initialize(): any {
    this.items = [
      { code: "Item 1", description: "Electric Fan", qtyOnHand: 2, qtyDR: 2, qtyInvoice: 2 },
      { code: "Item 2", description: "Television", qtyOnHand: 2, qtyDR: 2, qtyInvoice: 2 },
      { code: "Item 3", description: "Washing Machine", qtyOnHand: 2, qtyDR: 2, qtyInvoice: 2 },
      { code: "Item 4", description: "Refrigerator", qtyOnHand: 2, qtyDR: 2, qtyInvoice: 2 },
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initialize();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  popPage(item) {
    this.events.publish('item-events', item);
    this.navCtrl.pop();
  }


}
