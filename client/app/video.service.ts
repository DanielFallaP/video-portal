import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Video } from './video';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VideoService{
	constructor(private http:Http){}
	
	getVideo(): Promise<Video[]>{
		return this.http.get('http://localhost:3000/video')
			.toPromise()
			.then(response=>response.json().data as Video[])
			.catch(this.handleError);
	}
	
	getComments() : Observable<Video[]> {

         // ...using get request
         return this.http.get('http://localhost:3000/videos')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
	
	getVideoDetail(id: string): Promise<Video>{
		return this.http.get('http://localhost:8080/api/donors/' + id)
			.toPromise()
			.then(response=>response.json().data as Video)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any>{
		return Promise.reject(error.message || error);
	}
	
}
