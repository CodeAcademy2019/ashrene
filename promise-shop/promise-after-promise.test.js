const promiseFunction = require("./promise-after-promise")

describe('PromiseFuction',()=>{
    it('Promise should be fulfilled for firstPromise',()=>{
        return expect(promiseFunction.firstPromise).resolves.toEqual('FIRST');
    })
    it('Should give same value as firstPromise on fulfilling',()=>{
        return expect(promiseFunction.secondPromise).resolves.toEqual('FIRST');
    })
})