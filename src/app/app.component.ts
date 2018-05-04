import { Component, OnInit, Output } from '@angular/core';
import { RootObject } from './interfaceInfo';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { InfoService } from './info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent implements OnInit {

  menuState = 'out';
  menuActive = true;
  visible: boolean;
  // Output
  public selectedPage: RootObject;

  constructor(
    private _getInfo: InfoService,
    private _router: Router) { }

  // promise async await
  async ngOnInit() {
    const temp = await this._getInfo.getInfo();
    this.selectedPage = temp.find(p => this._router.url === '/' + p.routerLink);
  }

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.menuActive = !this.menuActive;

    this.visible = !this.visible;
  }

  // overlay
  // close() {
  // }

}

