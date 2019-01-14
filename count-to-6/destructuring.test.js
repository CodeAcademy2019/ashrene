const destructuring = require('./destructuring')

test("Destructure the array",() => {
    expect(destructuring(['John','jdoe','john@doe.com'])).toEqual({email: "john@doe.com", username: "jdoe" });
})

test("Destructure with no username",() => {
    expect(destructuring(['Adam','','adam@doe.com'])).toEqual({email: "adam@doe.com", username: "" });
})