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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var video_service_1 = require('./video.service');
require('app/modals.js');
var VideoListComponent = (function () {
    function VideoListComponent(videoService) {
        this.videoService = videoService;
        this.initialOffset = 3000;
        this.skip = 10;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        self = this;
        this.offsetCount = 0;
        this.videoService.getVideos(0, this.skip)
            .then(function (videos) {
            setScrollFire(_this.initialOffset, _this.getMoreVideos);
            _this.videos = videos;
            for (var i in _this.videos) {
            }
            showToast('Welcome!!!', 6000);
        });
    };
    ;
    VideoListComponent.prototype.getVideos = function () {
    };
    VideoListComponent.prototype.addStarRating = function () {
        showToast('Rating Set!', 2000);
    };
    VideoListComponent.prototype.getMoreVideos = function () {
        self.videoService.getVideos((self.offsetCount + 1) * self.skip, self.skip)
            .then(function (videos) {
            self.offsetCount++;
            setScrollFire((self.offsetCount + 1) * (self.initialOffset), self.getMoreVideos);
            self.videos = self.videos.concat(videos);
            showToast('More Videos!', 3000);
        });
    };
    VideoListComponent.prototype.openModal = function (id) {
        var st = '#' + id;
        document.getElementById("modalPopup").innerHTML = document.getElementById(id).innerHTML;
        showModal();
    };
    VideoListComponent.prototype.getVideoDetail = function (record) {
    };
    ;
    VideoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'video-list',
            templateUrl: 'video-list.component.html',
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=video-list.component.js.map