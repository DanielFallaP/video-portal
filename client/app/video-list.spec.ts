declare var outcome: string;
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

import 'app/materialize/MockMaterialize.js';

var videos: Video[];

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
  * Video service mockup
  */
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
		video2._id = "2";
		video2.name = "[0] Getting Started With ReactJs";
		video2.description = "video description";
		video2.ratings = [5, 3, 5];
		videos.push(video2);
		
		let video3 = new Video();
		video3._id = "3";
		video3.name = "[0] Getting Started With ReactJs";
		video3.description = "video description";
		video3.ratings = null;
		videos.push(video3);
		
		let video4 = new Video();
		video4._id = "4";
		video4.name = "[0] Getting Started With ReactJs";
		video4.description = "video description";
		video4.ratings = [2, 2, 2];
		videos.push(video4);
		
		let video5 = new Video();
		video5._id = "5";
		video5.name = "[0] Getting Started With ReactJs";
		video5.description = "video description";
		video5.ratings = [1, 1, 1];
		videos.push(video5);
		
		
		let video6 = new Video();
		video6._id = "6";
		video6.name = "[0] Getting Started With ReactJs";
		video6.description = "video description";
		video6.ratings = [1, 1, 1];
		videos.push(video6);
		
		let video7 = new Video();
		video7._id = "7";
		video7.name = "[0] Getting Started With ReactJs";
		video7.description = "video description";
		video7.ratings = [1, 1, 1];
		videos.push(video7);
		
		
		let video8 = new Video();
		video8._id = "8";
		video8.name = "[0] Getting Started With ReactJs";
		video8.description = "video description";
		video8.ratings = [1, 1, 1];
		videos.push(video8);
		
		
		var response: Video[] = [];
		
		var end = skip + limit;
		for (var i = skip; i < end; i++){
			response.push(videos[i]);
		}
		
		return Promise.resolve(response);
	}
	
	testMethod(): void {
	}
}

/**
  * Router mockup
  */
class MockedRouter{
}

/**
  * Unit tests for VideoListComponent
  */
describe('Testing Video List Component', () => {
  let fixture: ComponentFixture<VideoListComponent>;
  let user: User;

  beforeEach(async(() => {
	
	user = new User();
	user.username = 'ali';
	user.password = '5f4dcc3b5aa765d61d8327deb882cf99';

    TestBed.configureTestingModule({
      declarations: [
        VideoListComponent,
      ],
      providers: [
        { provide: VideoService, useClass: MockVideoService },
	    { provide: Router, useClass: MockedRouter }
	]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
	fixture.componentInstance.limit = 4;
    fixture.detectChanges();
  });

  it('Should calculate rating for all videos after load', async(inject([], () => {
    
	fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
		expect(fixture.componentInstance.videos[0][0].rating).toEqual(3);
		expect(fixture.componentInstance.videos[0][1].rating).toEqual(4);
		expect(fixture.componentInstance.videos[1][0].rating).toEqual(0);
      });
  })));
  
  it('Should stop playback if playing video is different', async(inject([], () => {
	fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
		var instance = fixture.componentInstance;
		instance.updatePlayingVideo(instance.videos[0][0]);
		var firstplayed = instance.playingVideo;
		instance.updatePlayingVideo(instance.videos[0][1]);
		expect(firstplayed === instance.playingVideo).toBe(false);
	  });
  })));
  
  it('Should not stop playback if playing video is different', async(inject([], () => {
	fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
		var instance = fixture.componentInstance;
		instance.updatePlayingVideo(instance.videos[0][0]);
		var firstplayed = instance.playingVideo;
		instance.updatePlayingVideo(instance.videos[0][0]);
		expect(firstplayed === instance.playingVideo).toBe(true);
	  });
  })));
  
  it('Should add more videos correctly to original list', async(inject([], () => {
	var instance = fixture.componentInstance;
	fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
		var size = 0;
		for (var i in instance.videos){
			for (var j in instance.videos[i]){
				size ++;
			}
		}
		
		expect(size).toBe(4);
		instance.getMoreVideos();
		
        return fixture.whenStable();
      })
      .then(() => {
		var size = 0;
		for (var i in instance.videos){
			for (var j in instance.videos[i]){
				size ++;
			}
		}
		expect(size).toBe(8);
	  });
  })));
});