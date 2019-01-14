const fn = require('./hello-world');
test('Function fn should print string',() => {
    expect(fn('HELLO ES6')).toEqual("HELLO ES6");
});
test('Function fn should not print anything other than HELLO ES6',() => {
    expect(fn('HELLO ES6')).not.toEqual("HELLO");
});