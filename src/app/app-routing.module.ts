import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainComponent
  },
  {
    path: 'experience', component: ExperienceComponent, data: { page: 'app-experience' }
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
