import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Video } from './video';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { Rating } from './rating';

/**
 * Service class handling all communication with the API.
 */
@Injectable()
export class VideoService{
	constructor(private http:Http,
		private router: Router){}
	
	//Logged in user session Id
	sessionId: string;
	
	//Current video being played in the details
	currentVideo: Video;
	
	/**
	 * Gets the videos by paging if present.
	 */
	getVideos(skip: number, limit: number) : Promise<Video[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('sessionId', this.sessionId);
		if (skip != null && limit != null){
			params.set('skip', skip.toString());
			params.set('limit', limit.toString());
		}
		
        return this.http.get('videos', { search: params })
			.toPromise()
			.then((res: Response) => res.json().data as Video[])
			.catch(this.handleError);
    }
	
	/**
	 * Calls the rating method given video id and rating
	 * encapsulated in the rating object.
	 */
	rateVideo(rating: Rating): Promise<any>{
		let params: URLSearchParams = new URLSearchParams();
		params.set('sessionId', this.sessionId);
		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}); 
		let options = new RequestOptions({ headers: headers, search: params });
		
		return this.http.post('video/ratings', rating, options)
			.toPromise()
			.catch(this.handleError);
	}
	
	/**
	 * Signs in into the app.
	 */
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
	
	/**
	 * Signs out from the video portal.
	 */
	signOut(): Promise<any> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('sessionId', this.sessionId);
		
		return this.http.get('user/logout', { search: params })
			.toPromise()
			.catch(this.handleError);
	}
	
	/**
	 * Handles server error.
	 */
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.error || error);
	}
	
}
