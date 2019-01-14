const average = require("./rest")

test("Should give average of numbers",() => {
    expect(average(1,2,3)).toEqual(2);
})

test("Should give average of numbers",() => {
    expect(average(-1,1,-1,1)).toEqual(0);
})