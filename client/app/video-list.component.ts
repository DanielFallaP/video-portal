declare function showModal():void;
declare function showToast(message:string, delay:number):void;
declare function setScrollFire(offset: number, callback: any): void;
declare var self: any;

import 'rxjs/add/operator/switchMap';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from './video.service';
import { Video } from './video';
import 'app/modals.js';

@Component({
  moduleId: module.id,
  selector: 'video-list',
  templateUrl: 'video-list.component.html',
})

export class VideoListComponent implements OnInit{
  
	constructor(private videoService: VideoService){}
	videos: Video[];
	offsetCount: number;
	initialOffset: number = 3000;
	skip: number = 10;

	ngOnInit(): void{
		self = this;
		this. offsetCount = 0;
		this.videoService.getVideos(0, this.skip)
			.then((videos: Video[]) => {
				setScrollFire(this.initialOffset, this.getMoreVideos);
				this.videos = videos;
				for (var i in this.videos){
				}
				showToast('Welcome!!!', 6000);
			});
	};
  
	getVideos(): void {
		
	}
	
	addStarRating(): void{
		showToast('Rating Set!', 2000);
	}
	
	getMoreVideos(): void{
		self.videoService.getVideos((self.offsetCount + 1) * self.skip, self.skip)
			.then((videos: Video[]) => {
				self.offsetCount++;
				setScrollFire((self.offsetCount + 1) * (self.initialOffset), 
					self.getMoreVideos);
				self.videos = self.videos.concat(videos);
				showToast('More Videos!', 3000);
			});
	}
  
	openModal(id: string): void{
		let st='#'+id;
		document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
		showModal();
	}
  
	getVideoDetail(record: Video): void{	
	};
}