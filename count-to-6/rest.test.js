const average = require("./rest")
let testInputs = [
    {
        testDescription: 'average Should give average of numbers',
        functionInputs: [1,2,3],
        expectedOutputs: 2
    },
    {
        testDescription: 'average Should give average of negative and positive numbers',
        functionInputs: [-1,1,-1,1],
        expectedOutputs: 0
    },
    {
        testDescription: 'average when empty string is passed',
        functionInputs: [''],
        expectedOutputs: 0
    },
    {
        testDescription: 'average when null is passed',
        functionInputs: [null],
        expectedOutputs: 0
    },
    {
        testDescription: 'average when [] is passed',
        functionInputs: [],
        expectedOutputs: 0
    }

]
testInputs.forEach( (inputs) => {
    test(inputs.testDescription,() => {
        expect(average(...inputs.functionInputs)).toEqual(inputs.expectedOutputs);
})
})