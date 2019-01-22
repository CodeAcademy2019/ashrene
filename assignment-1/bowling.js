// const roll = (pins) => {
//     return pins;
// }

const bowling = (input) => {
    const length = input.length;
    let score = [];
    for(let i = 0; i< length; i++){

        if(input[i]<10){ //open
            score[i] = input[i];
            console.log(i + ' ' + score[i] + ' open input ' + input[i] );
        }

        if((input[i] < 10)&&(input[i]+input[i-1] == 10)&&(i-1>=0)&&(i<18)){ //spare
            score[i] = 10 + input[i+1];
            score[i-1] = 0;
            console.log(i + ' ' + score[i] + ' spare input ' + input[i] );
        }
        
        if(input[i] == 10){ //strike
            if(i<18){
                if(input[i+1] == 10){
                    score[i] = 10 + input[i+1] + input[i+2];
                    console.log(i + ' ' + score[i] + ' strike input ' + input[i] );
                }
                // else{
                //     score[i] = 10 + input[i+1] + input[i+2]
                //     console.log(i + ' ' + score[i] + ' strike input ' + input[i] );
                // }
            }
            if(i==18){
                if((input[i] == 10)&&(input[i+1]<10)){
                    score[i] = 10;
                    score[i+1] = 10;
                    console.log(i + ' ' + score[i] + ' strike input ' + input[i] );

                }
                if((input[i] == 10)&&(input[i+1]==10)){
                    score[i] = 10;
                    score[i+1] = 10;
                    score[i+2] = 10;
                    console.log(i + ' ' + score[i] + ' strike input ' + input[i] );
                }
            }

        }
    }
    let finalscore = score.reduce((acc,currV) => (
        acc += currV
    ),0)
    console.log(finalscore);
    return finalscore;
}

module.exports = bowling;
