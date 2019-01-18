const prul = require('./prul.js')


describe('Prul function',()=>{
    it('should give maximum profit and number of boxes has one possible value - Ashrene',()=>{
        expect(prul([3,7,3,2,1,3,10,12,2,6,12,13,14,15,2,3,3,1,2,3,0])).toEqual([62,16]);
    })
    it('should give maximum profit and number of boxes has one possible value - Manish',()=>{
        expect(prul([4,10,16,14,12,15,17,18,1,1,1,1,10,20,20,10,10,8,18,17,1,1,1,15,1,2,3,4,15,14,13,12,11,10,20,19,18,17,16,5,1,1,18,17,1,0])).toEqual([52,16]);
    })
    it('should give maximum profit and number of boxes has one possible value - Shreya',()=>{
        expect(prul([2,5,4,5,6,10,4,5,9,8,7,4,9,0])).toEqual([34,10]);
    })
    /*it('should give maximum profit and number of boxes possible is more than one - Hemant',()=>{
        expect(prul([3,3,19,9,2,5,20,11,10,7,1,2,18,2,0])).toEqual([1,5,7,8,10]);
    })
    it('should give maximum profit and number of boxes possible is more than one - Yash',()=>{
        expect(prul([2,6,1,2,3,10,15,5,6,15,5,15,5,15,5,0])).toEqual([24,3,4,6,8,10,12]);
    })
    it('should give maximum profit and number of boxes possible is more than one - Gurrehmat',()=>{
        expect(prul([1,10,5,13,8,7,11,9,2,10,11,13,2,7,8,1,9,15,3,6,10,4,7,2,14,10,0])).toEqual([15,7,8,2,29,8,9]);
    })*/
})