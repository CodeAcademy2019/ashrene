count = require('./done')

describe('count',() => {
    it('should throw error "OH NOES"',() => {
        expect(count.alwaysThrows).toThrowError()
    })
})

describe('Output',() => {
    it('Should store the resolved value of promise till rejects',() => {
        expect(count.output).toEqual([1, 2, 3, 4, 5, "OH NOES"])
    })
})

describe('iterate',() => {
    it('should increment argument by one', () => {
        expect(count.iterate(1)).toEqual(2)
    })
})