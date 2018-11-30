import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SalesOrderItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales-order-item',
  templateUrl: 'sales-order-item.html',
})
export class SalesOrderItemPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.item = {
      code: '',
      description: '',
      qty: 0,
      qtyOnHand: '',
      qtyDR: '',
      qtyInvoice: '',
      unit: '',
      unitPrice: 0,
      //subTotal: this.item.qty * this.item.unitPrice
    }
    this.events.subscribe('item-events', (paramsVar) => {
      this.item = paramsVar;
      this.item.qty = 0;
      this.item.unitPrice = 0;
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesOrderItemPage');
  }

  goto(page: any){
    this.navCtrl.push(page);
  }

  save(){
    this.events.publish('order-item-events', this.item);
    this.navCtrl.pop();
  }

  get subTotal(){
    this.item.subTotal = this.item.qty * this.item.unitPrice;
    return this.item.subTotal;
  }

}
