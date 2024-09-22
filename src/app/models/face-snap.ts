
import { SnapType } from "./snap-type";

export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public imageUrl: string) {
    this.id = crypto.randomUUID().substring(0, 8);
    console.log(this);
  }

  snap(snapType: SnapType): void {
    if (snapType === 'snap') {
      this.addSnap();
    }
    else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }
  addSnap(): void {
    this.snaps++;
  }
  removeSnap(): void {
    this.snaps--;
  }
  setLocation(location: string): FaceSnap {
    this.location = location;
    return this;
  }
}