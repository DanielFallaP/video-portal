declare function showToast(message: string, delay: number): void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { User } from './user';
import { Video } from './video';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'app/modals.js'
 
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  //styleUrls: ['main-grid.component.css']
})

export class LoginComponent implements OnInit{
  
  constructor (private videoService: VideoService,
				private http:Http,
				private router: Router){}
  user: User;
  ngOnInit(): void{
	this.user = new User();
	this.user.username = 'ali';
	this.user.password = '5f4dcc3b5aa765d61d8327deb882cf99'
  };
  
  signIn(user: User): void{
	this.videoService.signIn(user)
		.then((res: Response) => {
			if (res.json().sessionId){
				this.videoService.sessionId = res.json().sessionId;
				this.router.navigate(['/videoList']);
			}
			else{
				this.handleError(null);
			}
		})
		.catch(this.handleError);
  };
  
  
  private handleError(error: any): void{
	showToast('Wrong credentials. Please try again', 3000)
  }
}