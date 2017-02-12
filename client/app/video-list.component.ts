declare function showModal():void;
declare function showToast(message:string, delay:number):void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
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

export class VideoListComponent{
  
  constructor(private videoService: VideoService){}
  records: Video[];
  recordDetail: RecordDetail;
  ngOnInit(): void{

	/*this.donorService.getComments()
		   .subscribe(
			donors => {
				setDonors(donors);
			}, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});*/
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