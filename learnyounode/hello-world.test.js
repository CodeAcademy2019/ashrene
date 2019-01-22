print = require('./hello-world')

describe('Print',() => {
    it('Should print HELLO WORLD',() => {
        expect(print()).toEqual('HELLO WORLD');
    })
})
    