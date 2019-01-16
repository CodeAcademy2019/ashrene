function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(acc,curr){
        if(acc[curr]){
            acc[curr]++;
        }
        else{
        acc[curr] = 1;
        }
        return acc;
    },{});
    }
    
  

  module.exports = countWords