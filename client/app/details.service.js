"use strict";
var DetailsService = (function () {
    function DetailsService() {
    }
    DetailsService.prototype.createDb = function () {
        var recordDetails = [
            { id: '4560', type: 'firewall', owner: 'lina', state: 'Pending' },
            { id: 'Tenrox-R1_1234', type: 'build', owner: 'lina', state: 'Complete', testScore: 73,
                testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
                debugBuild: 1, releaseBuild: 0, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
            },
            { id: 'Tenrox-R1_1235', type: 'build', owner: 'daniel', state: 'Complete', testScore: 73,
                testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
                debugBuild: 1, releaseBuild: 0, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
            },
            { id: '4568', type: 'firewall', owner: 'miguel', state: 'Rejected', testScore: 73,
                testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
                debugBuild: 1, releaseBuild: 0, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
            },
            { id: '4571', type: 'firewall', owner: 'miguel', state: 'Running', testScore: 73,
                testScoreChange: 1, maintainabilityScore: 67, maintainabilityScoreChange: 1, securityScore: 43, securityScoreChange: 0, workmanshipScore: 87, workmanshipScoreChange: 53,
                debugBuild: 1, releaseBuild: 0, unitTestCoverage: 67, unitTestSuccessful: 34, unitTestFailing: 20, funcTestCoverage: 10, funcTestSuccessful: 56, funcTestFailing: 67
            }
        ];
        return { recordDetails: recordDetails };
    };
    return DetailsService;
}());
exports.DetailsService = DetailsService;
//# sourceMappingURL=details.service.js.map