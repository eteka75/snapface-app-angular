import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    PercentPipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  btnText!: string;
  userHasSnaped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getOneFacesnap();
  }

  private prepareInterface(): void {
    this.btnText = 'Oh Snape!';
    this.userHasSnaped = false;
  }
  private getOneFacesnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getSnapById(faceSnapId);
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
