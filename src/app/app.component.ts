import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapeListComponent,HeaderComponent],
  templateUrl: 'app.component.html'
})
export class AppComponent {

}
