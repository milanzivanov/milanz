import { Component, OnInit, Output } from '@angular/core';
import { RootObject } from './interfaceInfo';
import { trigger,
         state,
         transition,
         query,
         style,
         animate,
         group,
         animateChild} from '@angular/animations';
import { InfoService } from './info.service';
import { Router, Routes } from '@angular/router';

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
    // anim Routes
      trigger('animRoutes', [
        transition('* <=> *', [
          group([
            query(
              ':enter',
              [
                style({
                  opacity: 0,
                  transform: 'translateY(9rem) rotate(-10deg)'
                }),
                animate(
                  '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                  style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
                ),
                animateChild()
              ],
              { optional: true }
            ),
            query(
              ':leave',
              [animate('0.35s', style({ opacity: 0 })), animateChild()],
              { optional: true }
            )
          ])
        ])
      ])
  ]
})
export class AppComponent implements OnInit {

  menuState = 'out';
  menuActive = true;
  // Output
  public selectedPage: RootObject;

  constructor(private _getInfo: InfoService,
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
  }

  // animating routes
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'experience';
  }

}
