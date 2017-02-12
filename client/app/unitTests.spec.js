"use strict";
require('app/modals.js');
describe('tests', function () {
    it('should return red for rejected', function () { return expect(getColorFunc(1)).toBe('#be0712'); });
    it('should return green for complete', function () { return expect(getColorFunc(2)).toBe('#548039'); });
    it('should return crop square for running', function () { return expect(getIconFunc('Running')).toBe('crop_square'); });
});
//# sourceMappingURL=unitTests.spec.js.map