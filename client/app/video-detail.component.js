"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var video_service_1 = require('./video.service');
var rating_1 = require('./rating');
var router_1 = require('@angular/router');
require('app/modals.js');
var VideoDetailComponent = (function () {
    function VideoDetailComponent(videoService, router) {
        this.videoService = videoService;
        this.router = router;
    }
    /**
     * Sets the video to show in the details page.
     */
    VideoDetailComponent.prototype.ngOnInit = function () {
        this.video = this.videoService.currentVideo;
        this.videos = this.videoService.videos;
        setAnimation('#videoDetail');
    };
    ;
    /**
     * Switches video detail from selected video
     * in navigation list.
     */
    VideoDetailComponent.prototype.switchDetail = function (video) {
        this.videos = this.videos.filter(function (vid) {
            return vid._id !== video._id;
        });
        this.videos.push(this.video);
        this.video = video;
    };
    ;
    /**
     * Gets the rating color for the nth star in the star
     * rating according to the video's rating.
     */
    VideoDetailComponent.prototype.getRatingColor = function (video, star) {
        return star <= video.rating ? 'gold' : 'black';
    };
    /**
     * Rates current video.
     */
    VideoDetailComponent.prototype.rateVideo = function (id, score) {
        var rating = new rating_1.Rating();
        rating.videoId = id;
        rating.rating = score;
        this.videoService.rateVideo(rating)
            .then(function () {
            showToast('Thanks for your rating!!!', 6000);
        });
    };
    /**
     * Signs out from the app.
     */
    VideoDetailComponent.prototype.signOut = function () {
        this.videoService.signOut()
            .then(function () { });
        this.router.navigate(['/']);
    };
    VideoDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'video-detail',
            templateUrl: 'video-detail.component.html',
            styleUrls: ['video-list.component.css']
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService, router_1.Router])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map