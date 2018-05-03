import { RootObject } from './../interfaceInfo';
import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private _infoStories: InfoService) { }

  public stories: RootObject[] = [];

  async ngOnInit() {
    // const temp = await this._getInfo.getInfo();
    const temp = await this._infoStories.getInfo();
    this.stories = temp;

    console.log(this.stories);

  }

}
