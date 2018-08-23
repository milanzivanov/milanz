import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { RootObject } from '../interfaceInfo';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public works: RootObject[] = null;

  constructor(private _getInfo: InfoService) { }

  async ngOnInit() {
    const temp = await this._getInfo.getInfo();
    this.works = temp;
    console.log(this.works);
  }

}
