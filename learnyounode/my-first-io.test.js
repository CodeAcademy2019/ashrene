const fs = require('fs')
const newlineCount = require('./my-first-io')

filePath = './newlineCount.txt';
emptyFile = './emptyFile.txt'
describe('Newline count', () => {
    it('should give count of new lines in file', () => {
        expect(newlineCount(filePath)).toEqual(5);
    })
    it('should give count of new lines in empty file', () => {
        expect(newlineCount(emptyFile)).toEqual(0);
    })
})