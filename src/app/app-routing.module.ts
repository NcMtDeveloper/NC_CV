import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { DetailsComponent } from './details/details.component';
import { LoadingComponent } from './loading/loading.component';
import { MainCVComponent } from './main-cv/main-cv.component';
import { MobileBarComponent } from './mobile-bar/mobile-bar.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'main', component: MainCVComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'biography', component: BiographyComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
