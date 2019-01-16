const important = require("./default-arguments-1")

test("Append ! when length is given",() => {
    expect(important("Hi",5)).toEqual("Hi!!!!!");
})

test("Append ! when only string is given",() => {
    expect(important("Hi")).toEqual("Hi!!");
})

test("Append ! when length is undefined",() => {
    expect(important("Hi",undefined)).toEqual("Hi!!");
})
test("Append ! when length is null",() => {
    expect(important("Hi",{})).toEqual("Hi");
})