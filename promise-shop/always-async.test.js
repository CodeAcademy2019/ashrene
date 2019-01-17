const promise = require('./always-async')

describe('Promise',() => {
    it('Test that promise is asynchronous',() => {
        return expect(promise.promiseObject).resolves.toEqual('PROMISE VALUE');
    })
})