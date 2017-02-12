declare function showModal(): void;
declare function showToast(message: string, delay: number): void;

import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';
import 'app/modals.js'

@Component({
  moduleId: module.id,
  selector: 'video',
  templateUrl: 'video-detail.component.html',
  //styleUrls: ['main-grid.component.css']
})

export class VideoDetailComponent{
  
  constructor (private videoService: VideoService){}
  records: Video[];
  recordDetail: Video;
  ngOnInit(): void{
  };
  
  openModal(id:string): void{
	let st='#'+id;
	document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
	showModal();
  }
  
}