import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'experience', component: ExperienceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'technology', component: TechnologyComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

export const routingComponents = [
  MainComponent,
  MenuComponent,
  ContactComponent,
  ExperienceComponent,
  PageNotFoundComponent,
  ModalComponent,
  PortfolioComponent,
  TechnologyComponent
];
