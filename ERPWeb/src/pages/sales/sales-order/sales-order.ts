import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, ToastController, ViewController } from 'ionic-angular';
import * as _ from 'lodash';
import { Sales } from '../../../providers/sales/sales';

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

    loader = this.loadingCtrl.create({
        content: "Saving. Please wait..."
    });

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        private events: Events,
        private salesProvider: Sales,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController) {
        this.order = {
            customer: null,
            orderDate: null,
            items: [],
            total: ''
        }
        this.events.subscribe('customer-events', (paramsVar) => {
            this.order.customer = paramsVar;
        });
        this.events.subscribe('order-item-events', (paramsVar) => {
            this.order.items.push(paramsVar);
            this.order.total = _.sumBy(this.order.items, function (item) { return item.subTotal; });
        });

    }

    ionViewDidLoad() {

    }

    goto(page: any) {
        this.navCtrl.push(page);
    }

    submit() {
        if (this.order.customer != null && this.order.orderDate != null && this.order.items.length > 0) {
            var so = {
                date: this.order.orderDate,
                customerId: this.order.customer.id,
                address: this.order.customer.address,
                telNo: this.order.customer.telNo,
                contactPerson: this.order.customer.contactPerson,
                amount: this.order.total
            }

            this.salesProvider.addSalesOrder(so).subscribe((resp) => {
                let toast = this.toastCtrl.create({
                    message: "Saving successful",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                this.loader.dismiss();
                this.viewCtrl.dismiss();
            }, (err) => {
                let toast = this.toastCtrl.create({
                    message: "Saving failed",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                this.loader.dismiss();
            });

        } else {
            alert("Missing required fields.");
        }
    }
}
