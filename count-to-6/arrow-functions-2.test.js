const kick = require("./arrow-functions-2")

test("Arrow function test",() => {
    expect(kick("Ouch")).toEqual("Ouch!");
})
test("Arrow function test",() => {
    expect(kick("Ouch")).not.toEqual("Ouch");
})