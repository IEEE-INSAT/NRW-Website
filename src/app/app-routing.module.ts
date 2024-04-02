import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './Pages/forum/forum.component';
import { HackathonComponent } from './Pages/hackathon/hackathon.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NRWJuniorComponent } from './Pages/nrw-junior/nrw-junior.component';
import { ProgramComponent } from './Pages/program/program.component';
import { SocialActivitiesComponent } from './Pages/social-activities/social-activities.component';
import { WorshopsComponent } from './Pages/worshops/worshops.component';
import { SpeakersComponent } from './Pages/speakers/speakers.component';

const routes: Routes = [
  { path:'', component:HomePageComponent},
  { path:'forum', component:ForumComponent},
  { path: 'junior', component:NRWJuniorComponent},
  { path: 'hackathon', component:HackathonComponent},
  { path: 'social_activities', component:SocialActivitiesComponent},
  { path:'worshops', component:WorshopsComponent},
  { path:'program', component:ProgramComponent},
  { path: 'speakers', component:SpeakersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }