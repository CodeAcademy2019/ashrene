const bowling = require('./bowling.js');
const scoreArray = [3,4,5,6,1,2,3,4,5,10]
describe('pins', () => {
    it('should give the score of the game', () => {
        expect(bowling.pins([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
    });
    it('should give the score of the game', () => {
        expect(bowling.pins([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16);
    });
    it('should give the score of the game', () => {
        expect(bowling.pins([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
    });
});

describe('score', () => {
    it('should give the total sum of scores', () => {
        expect(bowling.score(scoreArray)).toEqual(scoreArray.reduce((acc, currV) => (
            acc += currV
        ),0));
    });
});
