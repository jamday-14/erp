import { Injectable } from '@angular/core';
import { Api } from '..';

/*
  Generated class for the MaintenanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Maintenance {

  constructor(public api: Api) {

  }

  queryItems(params?: any) {
    return this.api.get('maintenance/items', params);
  }

  queryEmployees(params?: any) {
    return this.api.get('maintenance/employees', params);
  }

  queryUnits(params?: any) {
    return this.api.get('maintenance/units', params);
  }

  queryCustomerTypes(params?: any) {
    return this.api.get('maintenance/customer-types', params);
  }

  queryBanks(params?: any) {
    return this.api.get('maintenance/banks', params);
  }

  queryPaymentModes(params?: any) {
    return this.api.get('maintenance/payment-modes', params);
  }

  queryPriceCategories(params?: any) {
    return this.api.get('maintenance/price-categories', params);
  }

  queryTerms(params?: any) {
    return this.api.get('maintenance/terms', params);
  }

  queryWarehouses(params?: any) {
    return this.api.get('maintenance/warehouses', params);
  }

  addItem(item: any) {
    return this.api.post('maintenance/items', item);
  }

  addEmployee(employee: any) {
    return this.api.post('maintenance/employees', employee);
  }
}
