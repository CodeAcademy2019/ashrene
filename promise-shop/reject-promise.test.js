const promise = require("./reject-promise")

describe('test promise function',() => {
    test('test if promise has been rejected to REJECTED',() => {
        //expect.assertions(1);
        return expect(promise.promiseObject).rejects.toEqual(Error('REJECTED!'));
        });
        //program();
    });