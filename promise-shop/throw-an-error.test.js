const parsePromised = require('./throw-an-error')

describe('parsePromised',() => {
    it('Should parse JSON on resolving',() => {
        return expect(parsePromised('{"Name":"Ashrene","Age":21}')).resolves.toEqual({"Name":"Ashrene","Age":21});
    })
    it('Should give error on rejecting',() => {
        return expect(parsePromised({"Name":"Ashrene","Age":21})).rejects.toEqual('Unexpected token o in JSON at position 1');
    })
})