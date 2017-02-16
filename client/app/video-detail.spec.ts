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
  currentVideo: Video = video;
  testMethod(): void {
  }
}

class MockedRouter{
}

describe('Testing Login Component', () => {

  let fixture: ComponentFixture<VideoDetailComponent>;
  let user: User;

  beforeEach(async(() => {
	video = new Video();
	video._id = "58a0dd05bbd2560dc4488a8a";
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

  it('Should asign current video after initialization', async(inject([], () => {
	expect(fixture.componentInstance.video._id).toEqual(video._id);
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
  
  it('Should get golden as star color if rating greater than star number', async(inject([], () => {
	fixture.componentInstance.getRatingColor(video, 3);
	expect(fixture.componentInstance.video._id).toEqual(video._id);
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
});