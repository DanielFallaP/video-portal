"use strict";
var video_service_1 = require('./video.service');
var router_1 = require('@angular/router');
var video_list_component_1 = require('./video-list.component');
var testing_1 = require('@angular/core/testing');
var user_1 = require('./user');
var video_1 = require('./video');
var angular2_materialize_1 = require('angular2-materialize');
require('angular2-materialize');
var videos;
var MockVideoService = (function () {
    function MockVideoService() {
    }
    MockVideoService.prototype.getVideos = function (skip, limit) {
        videos = [];
        var video1 = new video_1.Video();
        video1._id = "1";
        video1.name = "[0] Getting Started With ReactJs";
        video1.description = "video description";
        video1.ratings = [4, 3, 1];
        videos.push(video1);
        var video2 = new video_1.Video();
        video2._id = "1";
        video2.name = "[0] Getting Started With ReactJs";
        video2.description = "video description";
        video2.ratings = [5, 3, 5];
        videos.push(video2);
        var video3 = new video_1.Video();
        video3._id = "1";
        video3.name = "[0] Getting Started With ReactJs";
        video3.description = "video description";
        video3.ratings = null;
        videos.push(video3);
        return Promise.resolve(videos);
    };
    MockVideoService.prototype.testMethod = function () {
    };
    return MockVideoService;
}());
var MockedRouter = (function () {
    function MockedRouter() {
    }
    return MockedRouter;
}());
describe('Testing Login Component', function () {
    var fixture;
    var user;
    beforeEach(testing_1.async(function () {
        user = new user_1.User();
        user.username = 'ali';
        user.password = '5f4dcc3b5aa765d61d8327deb882cf99';
        testing_1.TestBed.configureTestingModule({
            declarations: [
                video_list_component_1.VideoListComponent,
                angular2_materialize_1.MaterializeDirective
            ],
            providers: [
                { provide: video_service_1.VideoService, useClass: MockVideoService },
                { provide: router_1.Router, useClass: MockedRouter }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(video_list_component_1.VideoListComponent);
        fixture.detectChanges();
    });
    it('Should calculate rating for all videos after load', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            return fixture.whenStable();
        })
            .then(function () {
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
//# sourceMappingURL=video-list.spec.js.map