
const templateString = require('./template-string')

test('Return lowercase',() => {
    expect(templateString(`NAME`)).toEqual(`Hello, NAME!
    Your name lowercased is "name".`);
});

test('When null input',() => {
    expect(templateString(``)).toEqual(undefined);
});

