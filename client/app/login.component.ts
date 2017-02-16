declare function showToast(message: string, delay: number): void;

import { OnInit } from '@angular/core';
import { Component, ApplicationRef } from '@angular/core';
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

/**
 * Component class for the log in page.
 */
export class LoginComponent implements OnInit{
  
  constructor (private videoService: VideoService,
				private http:Http,
				private router: Router,
				private ref: ApplicationRef){}
  
  //Represents the user typing on the sign in form
  user: User;
  
  /**
   * Starts component with predefined credentials.
   */
  ngOnInit(): void{
	this.user = new User();
	this.user.username = 'ali';
	this.user.password = '5f4dcc3b5aa765d61d8327deb882cf99'
  };
  
  /**
   * Signs into the video list page with current user info.
   */
  signIn(user: User): void{
	this.videoService.signIn(user)
		.then((res: Response) => {
				this.videoService.sessionId = res.json().sessionId;
			if (res.json().sessionId){
				this.ref.tick();
				this.router.navigate(['/videoList']);

			}
			else{
				showToast('Wrong credentials. Please try again', 3000);
			}
		})
		.catch(this.handleError);
  };
  
  /**
   * Handles server error
   */
  private handleError(error: any): void{
	showToast('Something went wrong. Please try again later', 3000)
  }
}