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

  public queryItems(params?: any) {
    return this.api.get('maintenance/items', params);
  }

  public addItem(item: any){
    return this.api.post('maintenance/items', item)
  }

  queryUnits(params?: any): any {
    return this.api.get('maintenance/units', params);
  }
}
