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
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/**
 * Service class handling all communication with the API.
 */
var VideoService = (function () {
    function VideoService(http, router) {
        this.http = http;
        this.router = router;
    }
    /**
     * Gets the videos by paging if present.
     */
    VideoService.prototype.getVideos = function (skip, limit) {
        var params = new http_1.URLSearchParams();
        params.set('sessionId', this.sessionId);
        if (skip != null && limit != null) {
            params.set('skip', skip.toString());
            params.set('limit', limit.toString());
        }
        return this.http.get('videos', { search: params })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    /**
     * Calls the rating method given video id and rating
     * encapsulated in the rating object.
     */
    VideoService.prototype.rateVideo = function (rating) {
        var params = new http_1.URLSearchParams();
        params.set('sessionId', this.sessionId);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.post('video/ratings', rating, options)
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * Signs in into the app.
     */
    VideoService.prototype.signIn = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('user/auth', user, options)
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * Signs out from the video portal.
     */
    VideoService.prototype.signOut = function () {
        var params = new http_1.URLSearchParams();
        params.set('sessionId', this.sessionId);
        return this.http.get('user/logout', { search: params })
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * Handles server error.
     */
    VideoService.prototype.handleError = function (error) {
        return Promise.reject(error.error || error);
    };
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map