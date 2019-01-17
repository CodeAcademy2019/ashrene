const promise = require('./reject-or-not')

describe('Promise',() => {
    it('Reject and resolve promise',() => {
        return expect(promise.promiseObject).resolves.toEqual('I FIRED');
    })
})