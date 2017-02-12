declare function getIconFunc(state:string): string
declare function getColorFunc(value:number): string;
declare function getDetailColorFunc(value:number): string;
import 'app/modals.js'

describe('tests', () => {
  it('should return red for rejected', () => expect(getColorFunc(1)).toBe('#be0712'));
  it('should return green for complete', () => expect(getColorFunc(2)).toBe('#548039'));
  it('should return crop square for running', () => expect(getIconFunc('Running')).toBe('crop_square'));

});