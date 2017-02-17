"use strict";
var video_service_1 = require('./video.service');
var router_1 = require('@angular/router');
var video_detail_component_1 = require('./video-detail.component');
var testing_1 = require('@angular/core/testing');
var user_1 = require('./user');
var video_1 = require('./video');
var video;
var MockVideoService = (function () {
    function MockVideoService() {
        this.currentVideo = video;
        this.videos = [];
        this.videos = [];
        var video1 = new video_1.Video();
        video1._id = "1";
        video1.name = "[0] Getting Started With ReactJs";
        video1.description = "video description";
        video1.ratings = [4, 3, 1];
        this.videos.push(video1);
        var video2 = new video_1.Video();
        video2._id = "2";
        video2.name = "[0] Getting Started With ReactJs";
        video2.description = "video description";
        video2.ratings = [5, 3, 5];
        this.videos.push(video2);
        var video3 = new video_1.Video();
        video3._id = "3";
        video3.name = "[0] Getting Started With ReactJs";
        video3.description = "video description";
        video3.ratings = null;
        this.videos.push(video3);
        var video5 = new video_1.Video();
        video5._id = "5";
        video5.name = "[0] Getting Started With ReactJs";
        video5.description = "video description";
        video5.ratings = [1, 1, 1];
        this.videos.push(video5);
        var video6 = new video_1.Video();
        video6._id = "6";
        video6.name = "[0] Getting Started With ReactJs";
        video6.description = "video description";
        video6.ratings = [1, 1, 1];
        this.videos.push(video6);
        var video7 = new video_1.Video();
        video7._id = "7";
        video7.name = "[0] Getting Started With ReactJs";
        video7.description = "video description";
        video7.ratings = [1, 1, 1];
        this.videos.push(video7);
        var video8 = new video_1.Video();
        video8._id = "8";
        video8.name = "[0] Getting Started With ReactJs";
        video8.description = "video description";
        video8.ratings = [1, 1, 1];
        this.videos.push(video8);
    }
    MockVideoService.prototype.testMethod = function () {
    };
    return MockVideoService;
}());
var MockedRouter = (function () {
    function MockedRouter() {
    }
    return MockedRouter;
}());
/**
 * Unit tests for Video Detail Component
 */
describe('Testing Video Detail Component', function () {
    var fixture;
    var user;
    beforeEach(testing_1.async(function () {
        video = new video_1.Video();
        video._id = "4";
        video.name = "[0] Getting Started With ReactJs";
        video.description = "video description";
        video.rating = 4;
        user = new user_1.User();
        user.username = 'ali';
        user.password = '5f4dcc3b5aa765d61d8327deb882cf99';
        testing_1.TestBed.configureTestingModule({
            declarations: [
                video_detail_component_1.VideoDetailComponent
            ],
            providers: [
                { provide: video_service_1.VideoService, useClass: MockVideoService },
                { provide: router_1.Router, useClass: MockedRouter }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(video_detail_component_1.VideoDetailComponent);
        fixture.detectChanges();
    });
    it('Should asign current video detail and navigation list after initialization', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
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
    it('Should get golden as star color if rating greater than or equal star number', testing_1.async(testing_1.inject([], function () {
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
    it('Should get black as star color if rating lesser than star number', testing_1.async(testing_1.inject([], function () {
        var color = fixture.componentInstance.getRatingColor(video, 5);
        expect(color).toEqual('black');
    })));
    it('Should switch detail video from nav list correctly', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
            var instance = fixture.componentInstance;
            expect(instance.video._id).toBe('4');
            instance.switchDetail(instance.videos[0]);
            expect(instance.video._id).toBe('1');
            expect(instance.videos.length).toBe(7);
            expect(instance.videos.filter(function (vid) {
                return vid._id === instance.video._id;
            }).length).toBe(0);
        });
    })));
});
//# sourceMappingURL=video-detail.spec.js.map