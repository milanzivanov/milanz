
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './interfaceInfo';
import { Observable } from 'rxjs';


@Injectable()
export class InfoService {

  public url = '../assets/db.json';

  constructor(private _http: HttpClient) { }

    async getInfo(): Promise<RootObject[]> {
      return this._http.get(this.url).pipe(
                 map(res => res as RootObject[])).toPromise();
    }

}
