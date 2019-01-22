const fs = require('fs')
const newline = require('./my-first-async-io')

filePath = './newlineCount.txt';
emptyFile = './emptyFile.txt'
let obj1 = fs.readFileSync(`${filePath}`);
let obj2 = fs.readFileSync(`${emptyFile}`);

describe('Count', () => {
    it('should give count of new lines in file', () => {
        expect(newline.count(obj1)).toEqual(5);
    })
    it('should give count of new lines in empty file', () => {
        expect(newline.count(obj2)).toEqual(0);
    })
})

describe('Newline count', () => {
    it('should call function', (done) => {
        newline.newlineCount(filePath, (obj1));
            expect(obj1).toEqual(5)
            done();
    })
        //expect(newline.newlineCount(filePath,)).toEqual(5);   
})

