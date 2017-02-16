declare function showModal(): void;
declare function showToast(message: string, delay: number): void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';
import { Rating } from './rating';
import { Router } from '@angular/router';

import 'app/modals.js'

@Component({
  moduleId: module.id,
  selector: 'video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-list.component.css']
})

/**
 * Component class for the video detail page.
 */
export class VideoDetailComponent implements OnInit{
  
	constructor (private videoService: VideoService,
	private router: Router){}
	
	//Current video displayed on details page
	video: Video;
	
   /**
	* Sets the video to show in the details page.
    */
	ngOnInit(): void{
		this.video = this.videoService.currentVideo;
	};
	
	/**
	 * Gets the rating color for the nth star in the star
	 * rating according to the video's rating.
	 */
	getRatingColor(video: Video, star: number): string{
		 return star <= video.rating? 'gold':'black';
	}

	/**
	 * Rates current video.
	 */
	rateVideo(id: string, score: number): void{
		let rating = new Rating();
		rating.videoId = id;
		rating.rating = score;
		this.videoService.rateVideo(rating)
			.then(() => {
				showToast('Thanks for your rating!!!', 6000);
			});
	}
	
	/**
	 * Signs out from the app.
	 */ 
	signOut(): void{
		this.videoService.signOut()
			.then(() => {});
		this.router.navigate(['/']);
	}
	
}