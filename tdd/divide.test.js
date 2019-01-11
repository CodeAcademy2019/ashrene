const divide = require('./divide');

test('divide should return quotient',function(){
    expect(divide(2,2).toEqual(1));
});
module.exports = divide