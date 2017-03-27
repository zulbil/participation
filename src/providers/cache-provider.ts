import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as localforage from "localforage";

/*
  Generated class for the CacheProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CacheProvider {

  constructor(public http: Http) {
    console.log('Hello CacheProvider Provider');
  }

   public setCache(key, item) {
        localforage.setItem(key, item, function(err) {
            if (err) console.log(err);
        });
    }

    public getCache(key) {
        return localforage.getItem(key);
    }

    public clearCache() {
        localforage.clear(function(err) {
        });
    }


}
