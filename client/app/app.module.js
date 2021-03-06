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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var video_service_1 = require('./video.service');
var video_list_component_1 = require('./video-list.component');
var login_component_1 = require('./login.component');
var video_detail_component_1 = require('./video-detail.component');
var app_routing_module_1 = require('./app-routing.module');
var angular2_materialize_1 = require('angular2-materialize');
var forms_1 = require('@angular/forms');
//Imports modules, components, services and bootstrap component
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                video_list_component_1.VideoListComponent,
                video_detail_component_1.VideoDetailComponent,
                login_component_1.LoginComponent,
                angular2_materialize_1.MaterializeDirective
            ],
            providers: [
                video_service_1.VideoService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map