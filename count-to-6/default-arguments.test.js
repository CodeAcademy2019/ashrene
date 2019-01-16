const midpoint = require("./default-arguments")
const lower = 0,upper = 1;
let testInputs = [
    {
        testDescription: 'midpoint Should return average for 2 numbers',
        functionInputs: [1,3],
        expectedOutputs: 2
    },
    {
        testDescription: 'midpoint Should return average for undefined and a number',
        functionInputs: [undefined,4],
        expectedOutputs: 2
    },
    {
        testDescription: 'midpoint Should return average for number and undefined',
        functionInputs: [3,undefined],
        expectedOutputs: 2
    },
    {
        testDescription: 'midpoint Should return average for undefined inputs',
        functionInputs: [undefined,undefined],
        expectedOutputs: 0.5
    },
    {
        testDescription: 'midpoint should give Average for very large numbers',
        functionInputs: [123456789656,76786876987],
        expectedOutputs: 123456789656+(76786876987-123456789656)/2
    }

]

testInputs.forEach((inputs) => {
    test(inputs.testDescription,() => {
        expect(midpoint(...inputs.functionInputs)).toEqual(inputs.expectedOutputs);
    })
})

