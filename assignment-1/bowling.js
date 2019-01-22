// const roll = (pins) => {
//     return pins;
// }
const score = (scoreArray) => {
    return scoreArray.reduce((acc,currV) => (
        acc += currV
    ),0);
}

const pins = (input) => {
    const length = input.length;
    let scoreArray = [];
    for(let i = 0; i< length; i++){

        if(input[i]<10){ //open
            scoreArray[i] = input[i];
            console.log(i + ' ' + scoreArray[i] + ' open input ' + input[i] );
        }

        if((input[i] < 10)&&(input[i]+input[i-1] == 10)&&(i-1>=0)&&(i<18)){ //spare
            scoreArray[i] = 10 + input[i+1];
            scoreArray[i-1] = 0;
            console.log(i + ' ' + scoreArray[i] + ' spare input ' + input[i] );
        }
        
        if(input[i] == 10){ //strike
            if(i<18){
                if(input[i+1] == 10){
                    scoreArray[i] = 10 + input[i+1] + input[i+2];
                    console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );
                }
                // else{
                //     score[i] = 10 + input[i+1] + input[i+2]
                //     console.log(i + ' ' + score[i] + ' strike input ' + input[i] );
                // }
            }
            if(i==18){
                if((input[i] == 10)&&(input[i+1]<10)){
                    scoreArray[i] = 10;
                    scoreArray[i+1] = 10;
                    console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );

                }
                if((input[i] == 10)&&(input[i+1]==10)){
                    scoreArray[i] = 10;
                    scoreArray[i+1] = 10;
                    scoreArray[i+2] = 10;
                    console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );
                }
            }

        }
    }
    return score(scoreArray);
}

module.exports = { pins, score };
