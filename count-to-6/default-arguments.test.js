const midpoint = require("./default-arguments")

test("Should return average for 2 numbers",() => {
    expect(midpoint(1,3)).toEqual(2);
})

test("Should return average for undefined and a number",() => {
    expect(midpoint(undefined,100)).toEqual(50);
})

test("Should return average for number and undefined",() => {
    expect(midpoint(-1,undefined)).toEqual(0);
})

test("Should return average for undefined inputs",() => {
    expect(midpoint(undefined,undefined)).toEqual(0.5);
})