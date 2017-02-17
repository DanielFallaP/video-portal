import { VideoService } from './video.service';
import { Router } from '@angular/router';
import { VideoDetailComponent } from './video-detail.component';
import {
  async,
  inject,
  TestBed,
  ComponentFixture,
} from '@angular/core/testing';
import { User } from './user';
import { Rating } from './rating';
import { Video } from './video';

var video: Video;

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

class MockVideoService {
  constructor(){
   this.videos = [];
		let video1 = new Video();
		video1._id = "1";
		video1.name = "[0] Getting Started With ReactJs";
		video1.description = "video description";
		video1.ratings = [4, 3, 1];
		this.videos.push(video1);
		
		let video2 = new Video();
		video2._id = "2";
		video2.name = "[0] Getting Started With ReactJs";
		video2.description = "video description";
		video2.ratings = [5, 3, 5];
		this.videos.push(video2);
		
		let video3 = new Video();
		video3._id = "3";
		video3.name = "[0] Getting Started With ReactJs";
		video3.description = "video description";
		video3.ratings = null;
		this.videos.push(video3);
		
		let video5 = new Video();
		video5._id = "5";
		video5.name = "[0] Getting Started With ReactJs";
		video5.description = "video description";
		video5.ratings = [1, 1, 1];
		this.videos.push(video5);
		
		
		let video6 = new Video();
		video6._id = "6";
		video6.name = "[0] Getting Started With ReactJs";
		video6.description = "video description";
		video6.ratings = [1, 1, 1];
		this.videos.push(video6);
		
		let video7 = new Video();
		video7._id = "7";
		video7.name = "[0] Getting Started With ReactJs";
		video7.description = "video description";
		video7.ratings = [1, 1, 1];
		this.videos.push(video7);
		
		
		let video8 = new Video();
		video8._id = "8";
		video8.name = "[0] Getting Started With ReactJs";
		video8.description = "video description";
		video8.ratings = [1, 1, 1];
		this.videos.push(video8);
  }
  currentVideo: Video = video;
  videos: Video[] = [ ];

  testMethod(): void {
  }
}

class MockedRouter{
}

/**
 * Unit tests for Video Detail Component
 */
describe('Testing Video Detail Component', () => {

  let fixture: ComponentFixture<VideoDetailComponent>;
  let user: User;

  beforeEach(async(() => {
	video = new Video();
	video._id = "4";
	video.name = "[0] Getting Started With ReactJs";
	video.description = "video description";
	video.rating = 4;
	
	user = new User();
	user.username = 'ali';
	user.password = '5f4dcc3b5aa765d61d8327deb882cf99';
	
    TestBed.configureTestingModule({
      declarations: [
        VideoDetailComponent
      ],
      providers: [
        { provide: VideoService, useClass: MockVideoService },
	    { provide: Router, useClass: MockedRouter }
	]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailComponent);
	
    fixture.detectChanges();
  });

  it('Should asign current video detail and navigation list after initialization', async(inject([], () => {
	fixture.whenStable()
		.then(() => {
			expect(fixture.componentInstance.video._id).toEqual(video._id);
			expect(fixture.componentInstance.videos.length).toEqual(7);
		
		});
    /*fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(true).toEqual(true);
      });*/
  })));
  
  it('Should get golden as star color if rating greater than or equal star number', async(inject([], () => {
	var color = fixture.componentInstance.getRatingColor(video, 3);
	expect(color).toEqual('gold');
    /*fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(true).toEqual(true);
      });*/
  })));
  
  it('Should get black as star color if rating lesser than star number', async(inject([], () => {
	var color = fixture.componentInstance.getRatingColor(video, 5);
	expect(color).toEqual('black');
  })));
  
  it('Should switch detail video from nav list correctly', async(inject([], () => {
	fixture.whenStable()
		.then(() => {
			var instance = fixture.componentInstance;
			expect(instance.video._id).toBe('4');

			instance.switchDetail(instance.videos[0]);
			expect(instance.video._id).toBe('1');
			expect(instance.videos.length).toBe(7);
			
			expect(instance.videos.filter(function(vid: Video){
				return vid._id === instance.video._id;
			}).length).toBe(0); 
		});
  })));
});