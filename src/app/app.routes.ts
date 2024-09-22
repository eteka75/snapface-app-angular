
import { Routes } from '@angular/router';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  {path: 'facesnaps', component: FaceSnapeListComponent}
];
