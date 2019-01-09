import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Maintenance } from '../../providers';
import { ListSize } from '..';

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

  currentIndex = 0;
  listSize = ListSize;
  records: any;
  items: any = [];

  loader = this.loadingCtrl.create({
    content: "Loading. Please wait..."
  });

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private events: Events,
    public maintenanceProvider: Maintenance,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
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

  popPage(item) {
    this.events.publish('item-events', item);
    this.navCtrl.pop();
  }


}
