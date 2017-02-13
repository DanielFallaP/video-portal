import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'my-app',
  
  template: `
   <nav>
    <div class="nav-wrapper" style="background-color:black;">
      <div class="brand-logo">&nbsp;{{title}}</div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li *ngIf="sessionId"><a href="/"><i class="material-icons">power_settings_new</i></a></li>
		
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
	constructor (private videoService: VideoService){}
	title: string = 'Video Portal';
	sessionId: string = this.videoService.sessionId;
}
