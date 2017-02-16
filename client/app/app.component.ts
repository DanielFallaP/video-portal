import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'my-app',
  
  template: `
	<router-outlet></router-outlet>
  `,
})

/**
 * Component class for the video portal app.
 */
export class AppComponent  {
	constructor (private videoService: VideoService){}
}
