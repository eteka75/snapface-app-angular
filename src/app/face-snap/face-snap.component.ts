import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    PercentPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  btnText!: string;
  userHasSnaped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  ngOnInit(): void {
    this.btnText = 'Oh Snape!';
    this.userHasSnaped = false;
  }

  onSnap(): void {
    if (this.userHasSnaped) {
      this.unSnap();
    } else {
      this.Snap();
    }
  }
  Snap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.btnText = "Oops, unSnape!";
    this.userHasSnaped = true;
  }

  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.btnText = "Oh Snap!";
    this.userHasSnaped = false;
  }
}
