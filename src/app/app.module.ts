import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { InfoService } from './info.service';
import { AppRoutingModule } from './/app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    ModalComponent,
    ExperienceComponent,
    ContactComponent,
    PortfolioComponent,
    TechnologyComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
