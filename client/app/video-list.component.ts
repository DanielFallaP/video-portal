declare function showModal():void;
declare function showToast(message:string, delay:number):void;

import 'rxjs/add/operator/switchMap';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from './video.service';
import { Video } from './video';
import { RecordDetail } from './record-detail';
import 'app/modals.js';

@Component({
  moduleId: module.id,
  selector: 'video-list',
  templateUrl: 'video-list.component.html',
  //styleUrls: ['main-grid.component.css']
})

export class VideoListComponent implements OnInit{
  
  constructor(private videoService: VideoService){}
  videos: Video[];
  recordDetail: RecordDetail;
  ngOnInit(): void{

	this.videoService.getVideos()
		.then((videos: Video[]) => {
			this.videos = videos;
			showToast('Welcome!!!', 6000);
		});
  };
  
  getVideos(): void {
	
  }
  
  openModal(id:string): void{
	let st='#'+id;
	document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
	showModal();
  }
  
  getVideoDetail(record: Video): void{	
  };
  
}