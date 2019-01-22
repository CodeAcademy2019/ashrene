const bowling = require('./bowling.js');

const scoreArray = [3, 4, 5, 6, 1, 2, 3, 4, 5, 10];
const falseArray = [5, -1, 23, 0];

describe('pins', () => {
    it('should give the score of the game - all open', () => {
        expect(bowling.pins([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
    });
    it('should give the score of the game - all open -all zero', () => {
        expect(bowling.pins([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
    });
    it('should give the score of the game - spare case', () => {
        expect(bowling.pins([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16);
    });
    it('should give the score of the game - special 10th frame', () => {
        expect(bowling.pins([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
    });
    it('should give the score of the game - invalid input case', () => {
        expect(bowling.pins([])).toEqual('Game stauts - invalid input!');
    });
});

describe('score', () => {
    it('should give the total sum of scores', () => {
        expect(bowling.score(scoreArray)).toEqual(scoreArray.reduce((acc, currV) => {
            acc += currV;
            return acc;
        }, 0));
    });
});

describe('checkGameStatus', () => {
    falseArray.forEach((value) => {
        it('should check the length of input array and give false status for negative cases', () => {
            expect(bowling.checkGameStatus(value)).toEqual(false);
        });
    });
    it('should check the length of input array and give false status for positive case', () => {
        expect(bowling.checkGameStatus(20)).toEqual(true);
    });
});
