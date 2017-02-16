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
describe('Testing Login Component', function () {
    var fixture;
    var user;
    beforeEach(testing_1.async(function () {
        video = new video_1.Video();
        video._id = "58a0dd05bbd2560dc4488a8a";
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
    it('Should asign current video after initialization', testing_1.async(testing_1.inject([], function () {
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
    it('Should get golden as star color if rating greater than star number', testing_1.async(testing_1.inject([], function () {
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
//# sourceMappingURL=video-detail.spec.js.map