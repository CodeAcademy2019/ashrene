
const templateString = require('./template-string')

test('templateString - Return lowercase',() => {
    expect(templateString(`NAME`)).toEqual(`Hello, NAME!
    Your name lowercased is "name".`);
});

test('templateString - When null input is given',() => {
    expect(templateString('')).toEqual(undefined);
});

