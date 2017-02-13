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
var user_1 = require('./user');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('app/modals.js');
var LoginComponent = (function () {
    function LoginComponent(videoService, http, router) {
        this.videoService = videoService;
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        this.user.username = 'ali';
        this.user.password = '5f4dcc3b5aa765d61d8327deb882cf99';
    };
    ;
    LoginComponent.prototype.signIn = function (user) {
        var _this = this;
        this.videoService.signIn(user)
            .then(function (res) {
            if (res.json().sessionId) {
                _this.videoService.sessionId = res.json().sessionId;
                _this.router.navigate(['/videoList']);
            }
            else {
                _this.handleError(null);
            }
        })
            .catch(this.handleError);
    };
    ;
    LoginComponent.prototype.handleError = function (error) {
        showToast('Wrong credentials. Please try again', 3000);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService, http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map