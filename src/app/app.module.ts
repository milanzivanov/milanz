import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { InfoService } from './info.service';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLHw2NWSH7JHcriI-H1yfsOegUbpmdNnU'
    })
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
