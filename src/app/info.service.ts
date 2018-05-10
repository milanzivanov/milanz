import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './interfaceInfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InfoService {

  public url = '../assets/db.json';

  constructor(private _http: HttpClient) { }


    // with promise
    async getInfo(): Promise<RootObject[]> {
      return this._http.get(this.url)
                 .map(res => res as RootObject[]).toPromise();
    }

}
