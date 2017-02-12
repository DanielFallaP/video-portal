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
var recordDetails = [
    { id: 'Tenrox-R1_1234', type: 'build', state: 'Complete', testScore: 73, timeEnded: 1469145043000,
        testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
        debugBuild: true, releaseBuild: true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
    },
    { id: 'Tenrox-R1_1235', type: 'build', state: 'Complete', testScore: 73, timeEnded: 1469145043000,
        testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 54, securityScoreChange: 1, workmanshipScore: 87, workmanshipScoreChange: 53,
        debugBuild: true, releaseBuild: true, unitTestCoverage: 54, unitTestSuccessful: 34, unitTestFailing: 10, funcTestCoverage: 34, funcTestSuccessful: 80, funcTestFailing: 67
    },
    { id: '4566', type: 'firewall', state: 'Accepted', testScore: 73, timeEnded: 1469145043000,
        testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 54, securityScoreChange: 1, workmanshipScore: 87, workmanshipScoreChange: 53,
        debugBuild: true, releaseBuild: true, unitTestCoverage: 54, unitTestSuccessful: 34, unitTestFailing: 10, funcTestCoverage: 34, funcTestSuccessful: 80, funcTestFailing: 67
    },
    { id: '4568', type: 'firewall', state: 'Rejected', testScore: 73, timeEnded: 1469145043000,
        testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: -1, securityScore: 43, securityScoreChange: -1, workmanshipScore: 87, workmanshipScoreChange: 53,
        debugBuild: true, releaseBuild: true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
    },
    { id: '4571', type: 'firewall', state: 'Running', testScore: 73,
        testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
        debugBuild: true, releaseBuild: true, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
    }
];
var DonorService = (function () {
    function DonorService(http) {
        this.http = http;
        this.recordsUrl = 'api/records';
    }
    DonorService.prototype.getRecords = function () {
        return this.http.get(this.recordsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DonorService.prototype.getRecordDetail = function (id) {
        var list = recordDetails.filter(function (el) { return el.id === id; });
        return Promise.resolve(list.length > 0 ? list[0] : null);
    };
    DonorService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    DonorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DonorService);
    return DonorService;
}());
exports.DonorService = DonorService;
//# sourceMappingURL=build.service.js.map