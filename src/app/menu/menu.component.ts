import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InfoService } from './../info.service';
import { RootObject } from './../interfaceInfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public users: RootObject[] = [];

  // Output
  @Output() public selected = new EventEmitter<RootObject>();

  constructor(private _getInfo: InfoService) { }

  // promise async await
  async ngOnInit() {
    const temp = await this._getInfo.getInfo();
    this.users = temp;
  }

  selectedUser(user: RootObject) {
    // Output
    this.selected.emit(user);
  }

}
