const bowling = require('./bowling.js');

describe('bowling', () => {
    it('should give the score of the frames', () => {
        expect(bowling([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(80); //testcase that fails, code gives 90
    });
    xit('should give the score of the frames', () => {
        expect(bowling([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16);
    });
    xit('should give the score of the frames', () => {
        expect(bowling([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
    });
});
