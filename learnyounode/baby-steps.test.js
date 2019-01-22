const sum = require('./baby-steps')
input = [1,2,3]
describe('Sum',() => {
    it('Should give sum of two numbers', () => {
        expect(sum(input)).toEqual(input.reduce((acc,currV) => (
            acc += currV
        ),0))
    })
})
