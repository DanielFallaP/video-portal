declare function showModal():void;
declare function showToast(message:string, delay:number):void;
declare function setScrollFire(offset: number, callback: any): void;
declare var self: any;
declare var Math: any;
declare function stopPlayback(videoId: string): void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from './video.service';
import { Video } from './video';
import { Rating } from './rating';
import { Router } from '@angular/router';

import 'app/modals.js';

@Component({
  moduleId: module.id,
  selector: 'video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css']
})

/**
 * Component class for the video list page.
 */
export class VideoListComponent implements OnInit{
  
	constructor(private videoService: VideoService,
				private router: Router){}
				
	//Current list of videos being displayed
	videos: Video[][] = [];

	//Skip value to use during scrolling
	offsetCount: number;
	
	//Number of columns in video detail page
	columnNumber: number = 2;
	
	//ScrollFire offset
	initialOffset: number = 3000;
	
	//Default limit number for paging results
	limit: number = 10;
	
	//Current playing video id
	playingVideo: string;

	/**
	 * Loads the first 10 videos, sets ScrollFire given the offse,
	 * and updates the rating for all videos.
	 */
	ngOnInit(): void{
		self = this;
		this.offsetCount = 0;
		this.videoService.getVideos(0, this.limit)
			.then((videos: Video[]) => {
				setScrollFire(this.initialOffset, this.getMoreVideos);
				for (var i = 0; i < videos.length; i = i + this.columnNumber){
					this.videos[i / this.columnNumber] = [];
					for (var j = 0; j < this.columnNumber; j++){
						this.videos[i / this.columnNumber].push(videos[i + j]);
					}
				}
				this.updateStarColors(videos);
				showToast('Videos Loaded!!!', 6000);
			});
	};
	
	/**
	 * Updates current playing video.
	 */
	updatePlayingVideo(video: Video): void{
		if (this.playingVideo != null && this.playingVideo !== video._id)
			stopPlayback(this.playingVideo);
		this.playingVideo = video._id;
	}
	
	/**
	 * Updates the star rating for all videos passed
	 * as params.
	 */
	updateStarColors(videos: Video[]): void {
		for (var i in videos){
			if (videos[i].ratings != null 
					&& videos[i].ratings.length > 0){
				var length = videos[i].ratings.length;
				videos[i].rating = Math.round(videos[i].ratings.reduce(self.add, 0) / length);				
			}
			else{
				videos[i].rating = 0;	
			}
		}
	}
	
	/**
	 * Adds two numbers.
	 */
	add(a: number, b:number): number{
		return a + b;
	}
  
    /**
	 * Rates video specified by id.
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
	 * Gets 10 more videos, updates the star rating,
	 * and creates a new ScrollFire for when it comes the
	 * time to load the next 10.
	 */
	getMoreVideos(): void{
		self.videoService.getVideos((self.offsetCount + 1) * self.limit, self.limit)
			.then((videos: Video[]) => {
				self.offsetCount++;
				setScrollFire((self.offsetCount + 1) * (self.initialOffset), 
					self.getMoreVideos);
				
				var newVideos: Video[][] = [];
				for (var i = 0; i < videos.length; i = i + self.columnNumber){
					newVideos[i / self.columnNumber] = [];
					for (var j = 0; j < self.columnNumber; j++){
						newVideos[i / self.columnNumber].push(videos[i + j]);
					}
				}	
				self.videos = self.videos.concat(newVideos);
				self.updateStarColors(videos);
				showToast('More Videos!', 3000);
			});
	}
	
	/**
	 * Gets the color for the nth star in the rating star 
	 * element.
	 */
	getRatingColor(video: Video, star: number): string{
		 return star <= video.rating? 'gold':'black';
	}
	
	/**
	 * Sets current video, and navigates to details page.
	 */
	goToDetail(video: Video): void{
		this.videoService.currentVideo = video;
		var navVideos: Video[] = [];
		for (var i in this.videos){
			for (var j in this.videos[i]){
				if (this.videos[i][j]._id !== video._id){
					navVideos.push(this.videos[i][j]);
				}
			}
		}
				
		this.videoService.videos = navVideos;
		this.router.navigate(['/videoDetail']);
	}

	/**
	 * Signs out from the video portal.
	 */
	signOut(): void{
		this.videoService.signOut()
			.then(() => {});
		this.router.navigate(['/']);
	}
	
}