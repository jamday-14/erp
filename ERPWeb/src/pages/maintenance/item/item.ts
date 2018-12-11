import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, LoadingController } from 'ionic-angular';

import { Maintenance, Menu } from '../../../providers';
import { ListSize } from '../..';


/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})

export class ItemPage {

  currentIndex = 0;
  listSize = ListSize;
  records: any;
  items: any = [];
  itemExpandHeight: number = 40;

  loader = this.loadingCtrl.create({
    content: "Loading. Please wait..."
  });

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public maintenanceProvider: Maintenance,
    public loadingCtrl: LoadingController,
    public menu: Menu) {

  }

  ionViewDidLoad() {

    this.menu.activateMenu(false, false, false, false, false, true);

    this.getData();
  }

  private getData() {
    this.loader.present();
    this.maintenanceProvider.queryItems().subscribe((resp) => {
      this.records = resp;
      this.items = this.records.slice(this.currentIndex, this.listSize);
      this.items.forEach(x => x.expandable = false);
      this.loader.dismiss();
    }, (err) => {
      this.loader.dismiss();
    });
  }

  getItems(ev) {

    this.items = this.records.slice(this.currentIndex, this.listSize);
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '' && val.length > 2) {
      this.items = this.records
        .filter((item) => {
          return (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.itemCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        .slice(this.currentIndex, this.listSize);
    }
  }

  doInfinite(infiniteScroll: InfiniteScroll) {

    this.currentIndex++;
    this.items = this.records.slice(0, (this.listSize * this.currentIndex));
    infiniteScroll.complete();

    if (this.items.length > 90) {
      infiniteScroll.enable(false);
    }

  }
  
  expandItem(item) {

    this.items.map((listItem) => {

      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }

      return listItem;

    });
  }

  new() {
    this.navCtrl.push("ItemCreatePage");
  }
}
