import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type";

@Injectable(
  { providedIn: 'root' }
)
export class FaceSnapsService {
  private faceFnaps: FaceSnap[] = [
    new FaceSnap(

      "le premier snap",
      "Ce premier snap est trop cool ",
      new Date(),
      5,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'),

    new FaceSnap(
      "Archimède",
      "Mon meilleur ami de tous les temps ",
      new Date(),
      38,
      'https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
      .setLocation('Washingthon'),

    new FaceSnap(
      "De parameridale du limpe",
      "Ce que nous allons créer est un autre Snap de luxe ",
      new Date(),
      229,
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    , new FaceSnap(
      "Fraternido palace",
      "As the best snap of the world for developer actors ",
      new Date(),
      129,
      'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    ,];

  getSnaps(): FaceSnap[] {
    return [...this.faceFnaps];
  }
  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const facesnap = this.getSnapById(faceSnapId);
    facesnap.snap(snapType);
  }
  getSnapById(faceSnapId: string): FaceSnap {
    const getSnap = this.faceFnaps.find(snap => snap.id = faceSnapId);
    if (!getSnap) {
      throw new Error('FaceSnap not found !');
    }
    return getSnap;
  }
}