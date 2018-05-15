import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { RootObject } from '../interfaceInfo';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  workLinks: RootObject[] = [];

  constructor(private _getInfo: InfoService) { }

  async ngOnInit() {
    const temp = await this._getInfo.getInfo();
    this.workLinks = temp;
    console.log(123);
    console.log(this.workLinks);
  }

}
