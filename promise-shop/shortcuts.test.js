const promise = require('./shortcuts')

describe('Promise',() => {
    it('Check promise shortcuts',()=>{
        return expect(promise).rejects.toEqual(Error('REJECT VALUE'))
    })
})