count = require('./done')

describe('count',() => {
    test('should throw error "OH NOES"',() => {
        expect(count.alwaysThrows()).toThrowError()
    })
})