const arrow = require('./arrow-functions-1')

test('Test arrow function on array containing strings',() => {
    expect(arrow(['Do','Not','Track'])).toEqual(`[Do,Not,Track] becomes \"DNT\"`);
});

test('Test arrow function on array containing one empty string',() => {
    expect(arrow(['Hi',''])).toEqual(`[Hi,] becomes \"Hundefined\"`); 
});