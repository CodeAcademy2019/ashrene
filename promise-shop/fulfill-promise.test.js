const program = require("./fulfill-promise.js")

describe('test promise function',() => {
    it('test if promise has been resolved to FULFILLED',() => {
        //program;
        //expect.assertions(0);
        return (expect(program.promiseObject).resolves.toEqual('FULFILLED!'));
        });
        //program();
    });
    //125364