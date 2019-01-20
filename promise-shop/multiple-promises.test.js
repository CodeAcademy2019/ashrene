const allFunctions = require('./multiple-promises');


describe('All', () => {
    it('Should resolve multiple promises', () => {
        expect(allFunctions.all(allFunctions.getPromise1, allFunctions.getPromise2)).resolves.toEqual(['Promise1 resolved', 'Promise2 resolved']);
    })
})
