import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snape-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snape-list.component.html',
  styleUrl: './face-snape-list.component.scss'
})
export class FaceSnapeListComponent implements OnInit {
  facesnaps !: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  ngOnInit(): void {
    this.facesnaps = this.faceSnapsService.getSnaps();
  }
}
