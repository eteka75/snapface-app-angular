import { FaceSnapsService } from './../services/face-snaps.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [

    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;


  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }




}
