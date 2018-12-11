import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }
  items: any[];

  public query(params?: any) {
    let seq = this.api.get('maintenance/items', params);
    seq.subscribe((resp) => {
    });

    return seq;
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
