const attachTitle = require('./values-and-promises')

describe('attachTitle',()=>{
    it('first should fulfill to give MANHATTAN',()=>{
        return expect(attachTitle.first).resolves.toEqual('MANHATTAN')
    })
    it('second should fulfill to give DR. MANHATTAN',()=>{
        return expect(attachTitle.second).resolves.toEqual('DR. MANHATTAN')
    })
})