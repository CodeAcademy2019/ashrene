const findMin = require('./spread')

test('Should give minimum',() => {
    expect(findMin([1,2,3,4,5,6])).toEqual(`The minimum of [1,2,3,4,5,6] is 1`);
});

test('Should not give minimum when empty',() => {
    expect(findMin([])).toEqual(`The minimum of [] is Infinity`);
});