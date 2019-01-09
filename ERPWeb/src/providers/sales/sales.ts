import { Injectable } from '@angular/core';
import { Api } from '..';

/*
  Generated class for the SalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Sales {

  constructor(public api: Api) {
    console.log('Hello SalesProvider Provider');
  }

  addSalesOrder(salesOrder: any) {
    return this.api.post('sales/orders', salesOrder);
  }
}
