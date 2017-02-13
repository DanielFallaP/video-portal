import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Video } from './video';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

@Injectable()
export class VideoService{
	constructor(private http:Http,
		private router: Router){}
	
	sessionId: string;
  
	getVideo(): Promise<Video[]>{
		return this.http.get('video')
			.toPromise()
			.then(response => response.json().data as Video[])
			.catch(this.handleError);
	}
	
	getVideos() : Promise<Video[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('sessionId', this.sessionId);
		
        return this.http.get('videos', { search: params })
			.toPromise()
			.then((res: Response) => res.json().data as Video[])
			.catch(this.handleError);
    }
	
	signIn(user: User) : Promise<any> {
		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}); 
		let options = new RequestOptions({ headers: headers });
		
		return this.http.post('user/auth', user, options)
			.toPromise()
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.message || error);
	}
	
}
