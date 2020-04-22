import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../model/IUser';
import { IVideo } from '../model/IVideo';

@Component({
  selector: 'app-user-carousel',
  templateUrl: './user-carousel.component.html',
  styleUrls: ['./user-carousel.component.scss']
})
export class UserCarouselComponent implements OnInit {

  @Input()
  public users: IUser[];

  public idxCurrentUser: number;
  public idxCurrentVideo: number;

  constructor() { }

  ngOnInit() {
    this.idxCurrentUser = 0;
    this.idxCurrentVideo = this.users[this.idxCurrentUser].videos.length-1;
  }

  public oldVideo(): void {

    console.log('oldvideo')

    if(this.idxCurrentVideo===0) {
      this.idxCurrentVideo = this.users[this.idxCurrentUser].videos!.length-1;
    } else {
      this.idxCurrentVideo--;
    }
  }

  public nextVideo(): void {
    if(this.idxCurrentVideo===this.users[this.idxCurrentUser].videos!.length-1) {
      this.idxCurrentVideo = 0;
    } else {
      this.idxCurrentVideo++;
    }
  }

  public oldUser(): void {
    if(this.idxCurrentUser===0) {
      this.idxCurrentUser = this.users.length-1;
    } else {
      this.idxCurrentUser--;
    }
  }

  public nextUser(): void {
    if(this.idxCurrentUser===this.users.length-1) {
      this.idxCurrentUser = 0;
    } else {
      this.idxCurrentUser++;
    }
  }
}
