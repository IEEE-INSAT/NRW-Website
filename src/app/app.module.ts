import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HackathonComponent } from './Pages/hackathon/hackathon.component';
import { NRWJuniorComponent } from './Pages/nrw-junior/nrw-junior.component';
import { WorshopsComponent } from './Pages/worshops/worshops.component';
import { ForumComponent } from './Pages/forum/forum.component';
import { SocialActivitiesComponent } from './Pages/social-activities/social-activities.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewBubbleComponent } from './Shared/review-bubble/review-bubble.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramComponent } from './Pages/program/program.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    HackathonComponent,
    NRWJuniorComponent,
    WorshopsComponent,
    ForumComponent,
    SocialActivitiesComponent,
    ReviewBubbleComponent,
    ProgramComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
