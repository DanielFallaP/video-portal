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
var VideoListComponent = (function () {
    function VideoListComponent(videoService, router) {
        this.videoService = videoService;
        this.router = router;
        //Current list of videos being displayed
        this.videos = [];
        //Number of columns in video detail page
        this.columnNumber = 2;
        //ScrollFire offset
        this.initialOffset = 3000;
        //Default limit number for paging results
        this.limit = 10;
    }
    /**
     * Loads the first 10 videos, sets ScrollFire given the offse,
     * and updates the rating for all videos.
     */
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        self = this;
        this.offsetCount = 0;
        setAnimation('#videoList');
        this.videoService.getVideos(0, this.limit)
            .then(function (videos) {
            setScrollFire(_this.initialOffset, _this.getMoreVideos);
            for (var i = 0; i < videos.length; i = i + _this.columnNumber) {
                _this.videos[i / _this.columnNumber] = [];
                for (var j = 0; j < _this.columnNumber; j++) {
                    _this.videos[i / _this.columnNumber].push(videos[i + j]);
                }
            }
            _this.updateStarColors(videos);
            showToast('Videos Loaded!!!', 6000);
        });
    };
    ;
    /**
     * Updates current playing video.
     */
    VideoListComponent.prototype.updatePlayingVideo = function (video) {
        if (this.playingVideo != null && this.playingVideo !== video._id)
            stopPlayback(this.playingVideo);
        this.playingVideo = video._id;
    };
    /**
     * Updates the star rating for all videos passed
     * as params.
     */
    VideoListComponent.prototype.updateStarColors = function (videos) {
        for (var i in videos) {
            if (videos[i].ratings != null
                && videos[i].ratings.length > 0) {
                var length = videos[i].ratings.length;
                videos[i].rating = Math.round(videos[i].ratings.reduce(self.add, 0) / length);
            }
            else {
                videos[i].rating = 0;
            }
        }
    };
    /**
     * Adds two numbers.
     */
    VideoListComponent.prototype.add = function (a, b) {
        return a + b;
    };
    /**
     * Rates video specified by id.
     */
    VideoListComponent.prototype.rateVideo = function (id, score) {
        var rating = new rating_1.Rating();
        rating.videoId = id;
        rating.rating = score;
        this.videoService.rateVideo(rating)
            .then(function () {
            showToast('Thanks for your rating!!!', 6000);
        });
    };
    /**
     * Gets 10 more videos, updates the star rating,
     * and creates a new ScrollFire for when it comes the
     * time to load the next 10.
     */
    VideoListComponent.prototype.getMoreVideos = function (el) {
        self.videoService.getVideos((self.offsetCount + 1) * self.limit, self.limit)
            .then(function (videos) {
            self.offsetCount++;
            setScrollFire((self.offsetCount + 1) * (self.initialOffset), self.getMoreVideos);
            var newVideos = [];
            for (var i = 0; i < videos.length; i = i + self.columnNumber) {
                newVideos[i / self.columnNumber] = [];
                for (var j = 0; j < self.columnNumber; j++) {
                    newVideos[i / self.columnNumber].push(videos[i + j]);
                }
            }
            self.videos = self.videos.concat(newVideos);
            self.updateStarColors(videos);
            showToast('More Videos!', 3000);
        });
    };
    /**
     * Gets the color for the nth star in the rating star
     * element.
     */
    VideoListComponent.prototype.getRatingColor = function (video, star) {
        return star <= video.rating ? 'gold' : 'black';
    };
    /**
     * Sets current video, and navigates to details page.
     */
    VideoListComponent.prototype.goToDetail = function (video) {
        this.videoService.currentVideo = video;
        var navVideos = [];
        for (var i in this.videos) {
            for (var j in this.videos[i]) {
                if (this.videos[i][j]._id !== video._id) {
                    navVideos.push(this.videos[i][j]);
                }
            }
        }
        this.videoService.videos = navVideos;
        this.router.navigate(['/videoDetail']);
    };
    /**
     * Signs out from the video portal.
     */
    VideoListComponent.prototype.signOut = function () {
        this.videoService.signOut()
            .then(function () { });
        this.router.navigate(['/']);
    };
    VideoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'video-list',
            templateUrl: 'video-list.component.html',
            styleUrls: ['video-list.component.css']
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService, router_1.Router])
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=video-list.component.js.map