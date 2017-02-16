import { VideoService } from './video.service';
import { Router } from '@angular/router';
import { VideoListComponent } from './video-list.component';
import {
  async,
  inject,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { User } from './user';
import { Rating } from './rating';
import { Video } from './video';
import {MaterializeDirective} from 'angular2-materialize';
import 'angular2-materialize';

var videos: Video[];

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

class MockVideoService {
  
	getVideos(skip: number, limit: number): Promise<Video[]>{
		videos = [];
		let video1 = new Video();
		video1._id = "1";
		video1.name = "[0] Getting Started With ReactJs";
		video1.description = "video description";
		video1.ratings = [4, 3, 1];
		videos.push(video1);
		
		let video2 = new Video();
		video2._id = "1";
		video2.name = "[0] Getting Started With ReactJs";
		video2.description = "video description";
		video2.ratings = [5, 3, 5];
		videos.push(video2);
		
		let video3 = new Video();
		video3._id = "1";
		video3.name = "[0] Getting Started With ReactJs";
		video3.description = "video description";
		video3.ratings = null;
		videos.push(video3);
		
		return Promise.resolve(videos);
	}
	
	testMethod(): void {
	}
}

class MockedRouter{
}

describe('Testing Login Component', () => {

  let fixture: ComponentFixture<VideoListComponent>;
  let user: User;

  beforeEach(async(() => {
	
	user = new User();
	user.username = 'ali';
	user.password = '5f4dcc3b5aa765d61d8327deb882cf99';

    TestBed.configureTestingModule({
      declarations: [
        VideoListComponent,
		MaterializeDirective
      ],
      providers: [
        { provide: VideoService, useClass: MockVideoService },
	    { provide: Router, useClass: MockedRouter }
	]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    fixture.detectChanges();
  });

  it('Should calculate rating for all videos after load', async(inject([], () => {
    
	fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
		expect(fixture.componentInstance.videos[0].rating).toEqual(3);
		expect(fixture.componentInstance.videos[1].rating).toEqual(4);
		expect(fixture.componentInstance.videos[2].rating).toEqual(0);
      });
  })));
  
  /*it('Should get golden as star color if rating greater than star number', async(inject([], () => {
	fixture.componentInstance.getRatingColor(video, 3);
	expect(fixture.componentInstance.video._id).toEqual(video._id);
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(true).toEqual(true);
      });
  })));*/
});