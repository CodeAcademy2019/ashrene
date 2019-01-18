
const stackProfit = (stack) => {
    let diffArray = stack.map((st)=>(10-st));
    //console.log(diffArray)
    //console.log(diffArray.length)
    let max = 0,sum=0,maxIndex=0,i,newSum=0;
    for(i = 0; i < diffArray.length;i++){
        sum = sum + diffArray[i];
        if(sum>=max){
            max = sum;
            maxIndex = i+1;
        }
        
    }
    let numBox = [];
    for(i=0;i<diffArray.length;i++){
        newSum = newSum + diffArray[i];
        if(newSum == max){
            numBox.push(i+1);
        }
    }
    //console.log([max,maxIndex])
    console.log(numBox);
    return [max,maxIndex,numBox];
}

const prulProfit=(arr)=>{
    let numStacks = arr[0],j,k,profit=0,number=0,arrayOfNumBox = [];

        for(j=1;j<(arr.length-2);j++){
            let size = arr[j];
            let newStack = [];
            
            for(k=j+1;k<=j+size;k++){
                newStack.push(arr[k]);
            }
            result = stackProfit(newStack);
            profit = profit + result[0];
            number = number + result[1];
            //arrayOfNumBox.push(result[2]);

            j = j + size;
        }
    
    // const cartesianArray = cartesian(arrayOfNumBox);
    // console.log(cartesianArray);
    // let resultArray = cartesianArray.map((currV)=>(
    //     currV.reduce((a,c)=>(a=a+c),0)
    // )).sort();
    // console.log(resultArray)
    
    return [profit,number];
    
}

module.exports = prulProfit