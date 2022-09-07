import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCVComponent } from './main-cv/main-cv.component';
import { DeskBarComponent } from './desk-bar/desk-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { DetailsComponent } from './details/details.component';
import { BiographyComponent } from './biography/biography.component';
import { FooterComponent } from './footer/footer.component';
import { BottomComponent } from './bottom/bottom.component';
import { LoadingComponent } from './loading/loading.component';
import { MobileBarComponent } from './mobile-bar/mobile-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCVComponent,
    DeskBarComponent,
    SkillsComponent,
    DetailsComponent,
    BiographyComponent,
    FooterComponent,
    BottomComponent,
    LoadingComponent,
    MobileBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
