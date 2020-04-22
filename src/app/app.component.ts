import { Component, OnInit } from '@angular/core';
import { IUser } from './model/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hammer-carousel';

  users: IUser[];

  ngOnInit(): void {
    this.users = [
      {
        id:1,
        name:'user1',
        videos:[
          {name:'video1', url:'http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v'},
          {name:'video2', url:'http://mirrors.standaloneinstaller.com/video-sample/metaxas-keller-Bell.m4v'},
          {name:'video3', url:'http://mirrors.standaloneinstaller.com/video-sample/page18-movie-4.m4v'}
        ]
      },
      {
        id:2,
        name:'user2',
        videos:[
          {name:'video4', url:'https://mdbootstrap.com/img/video/Tropical.mp4'},
          {name:'video5', url:'https://mdbootstrap.com/img/video/forest.mp4'},
          {name:'video6', url:'https://mdbootstrap.com/img/video/Agua-natural.mp4'}
        ]
      },
      {
        id:3,
        name:'user3',
        videos:[
          {name:'video7', url:'http://mirrors.standaloneinstaller.com/video-sample/lion-sample.m4v'},
          {name:'video8', url:'http://mirrors.standaloneinstaller.com/video-sample/TRA3106.m4v'},
          {name:'video9', url:'http://mirrors.standaloneinstaller.com/video-sample/P6090053.m4v'}
        ]
      },
    ]
  }

}
