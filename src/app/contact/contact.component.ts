import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // novi knezevac my home town
  lat = 46.0500000;
  lng = 20.1000000;

  constructor() { }

  ngOnInit() {
  }

}
