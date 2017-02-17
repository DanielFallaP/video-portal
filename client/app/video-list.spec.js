"use strict";
var video_service_1 = require('./video.service');
var router_1 = require('@angular/router');
var video_list_component_1 = require('./video-list.component');
var testing_1 = require('@angular/core/testing');
var user_1 = require('./user');
var video_1 = require('./video');
require('app/materialize/MockMaterialize.js');
var videos;
/**
  * Video service mockup
  */
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
        video2._id = "2";
        video2.name = "[0] Getting Started With ReactJs";
        video2.description = "video description";
        video2.ratings = [5, 3, 5];
        videos.push(video2);
        var video3 = new video_1.Video();
        video3._id = "3";
        video3.name = "[0] Getting Started With ReactJs";
        video3.description = "video description";
        video3.ratings = null;
        videos.push(video3);
        var video4 = new video_1.Video();
        video4._id = "4";
        video4.name = "[0] Getting Started With ReactJs";
        video4.description = "video description";
        video4.ratings = [2, 2, 2];
        videos.push(video4);
        var video5 = new video_1.Video();
        video5._id = "5";
        video5.name = "[0] Getting Started With ReactJs";
        video5.description = "video description";
        video5.ratings = [1, 1, 1];
        videos.push(video5);
        var video6 = new video_1.Video();
        video6._id = "6";
        video6.name = "[0] Getting Started With ReactJs";
        video6.description = "video description";
        video6.ratings = [1, 1, 1];
        videos.push(video6);
        var video7 = new video_1.Video();
        video7._id = "7";
        video7.name = "[0] Getting Started With ReactJs";
        video7.description = "video description";
        video7.ratings = [1, 1, 1];
        videos.push(video7);
        var video8 = new video_1.Video();
        video8._id = "8";
        video8.name = "[0] Getting Started With ReactJs";
        video8.description = "video description";
        video8.ratings = [1, 1, 1];
        videos.push(video8);
        var response = [];
        var end = skip + limit;
        for (var i = skip; i < end; i++) {
            response.push(videos[i]);
        }
        return Promise.resolve(response);
    };
    MockVideoService.prototype.testMethod = function () {
    };
    return MockVideoService;
}());
/**
  * Router mockup
  */
var MockedRouter = (function () {
    function MockedRouter() {
    }
    return MockedRouter;
}());
/**
  * Unit tests for VideoListComponent
  */
describe('Testing Video List Component', function () {
    var fixture;
    var user;
    beforeEach(testing_1.async(function () {
        user = new user_1.User();
        user.username = 'ali';
        user.password = '5f4dcc3b5aa765d61d8327deb882cf99';
        testing_1.TestBed.configureTestingModule({
            declarations: [
                video_list_component_1.VideoListComponent,
            ],
            providers: [
                { provide: video_service_1.VideoService, useClass: MockVideoService },
                { provide: router_1.Router, useClass: MockedRouter }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(video_list_component_1.VideoListComponent);
        fixture.componentInstance.limit = 4;
        fixture.detectChanges();
    });
    it('Should calculate rating for all videos after load', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            return fixture.whenStable();
        })
            .then(function () {
            expect(fixture.componentInstance.videos[0][0].rating).toEqual(3);
            expect(fixture.componentInstance.videos[0][1].rating).toEqual(4);
            expect(fixture.componentInstance.videos[1][0].rating).toEqual(0);
        });
    })));
    it('Should stop playback if playing video is different', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            return fixture.whenStable();
        })
            .then(function () {
            var instance = fixture.componentInstance;
            instance.updatePlayingVideo(instance.videos[0][0]);
            var firstplayed = instance.playingVideo;
            instance.updatePlayingVideo(instance.videos[0][1]);
            expect(firstplayed === instance.playingVideo).toBe(false);
        });
    })));
    it('Should not stop playback if playing video is different', testing_1.async(testing_1.inject([], function () {
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            return fixture.whenStable();
        })
            .then(function () {
            var instance = fixture.componentInstance;
            instance.updatePlayingVideo(instance.videos[0][0]);
            var firstplayed = instance.playingVideo;
            instance.updatePlayingVideo(instance.videos[0][0]);
            expect(firstplayed === instance.playingVideo).toBe(true);
        });
    })));
    it('Should add more videos correctly to original list', testing_1.async(testing_1.inject([], function () {
        var instance = fixture.componentInstance;
        fixture.whenStable()
            .then(function () {
            fixture.detectChanges();
            var size = 0;
            for (var i in instance.videos) {
                for (var j in instance.videos[i]) {
                    size++;
                }
            }
            expect(size).toBe(4);
            instance.getMoreVideos();
            return fixture.whenStable();
        })
            .then(function () {
            var size = 0;
            for (var i in instance.videos) {
                for (var j in instance.videos[i]) {
                    size++;
                }
            }
            expect(size).toBe(8);
        });
    })));
});
//# sourceMappingURL=video-list.spec.js.map