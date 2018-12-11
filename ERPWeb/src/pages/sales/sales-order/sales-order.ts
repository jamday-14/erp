import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as _ from 'lodash';

/**
 * Generated class for the SalesOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sales-order',
    templateUrl: 'sales-order.html',
})
export class SalesOrderPage {

    order: any;
    

    constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {
        this.order = {
            company: '',
            orderDate: '',
            items: [],
            total: ''
        }
        this.events.subscribe('customer-events', (paramsVar) => {
            this.order.company = paramsVar;
        });
        this.events.subscribe('order-item-events', (paramsVar) => {
            this.order.items.push(paramsVar);
            this.order.total = _.sumBy(this.order.items, function(item) { return item.subTotal; });
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SalesOrderPage');
    }

    goto(page: any) {
        this.navCtrl.push(page);
    }

}
