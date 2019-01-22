const score = scoreArray => (
    scoreArray.reduce((acc, currV) => {
        acc += currV;
        return acc;
    }, 0)
)

const checkGameStatus = (length) => {
    if ((length < 20) || (length > 21) || (length < 0)) {
        return false;
    }
    return true;
}

const pins = (input) => {
    const length = input.length;
    if (checkGameStatus(length)) {
        const scoreArray = [];
        for (let i = 0; i < length; i += 1) {
            // open
            if (input[i] < 10) {
                scoreArray[i] = input[i];
                // console.log(i + ' ' + scoreArray[i] + ' open input ' + input[i] );
            }
            if ((input[i] < 10) && (input[i] + input[i - 1] === 10) && (i - 1 >= 0) 
            && (i < 18)) { // spare
                scoreArray[i] = 10 + input[i + 1];
                scoreArray[i - 1] = 0;
                // console.log(i + ' ' + scoreArray[i] + ' spare input ' + input[i] );
            }
            if (input[i] === 10) { // strike
                if (i < 18) {
                    if (input[i + 1] === 10) {
                        scoreArray[i] = 10 + input[i + 1] + input[i + 2];
                        // console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );
                    }
                }
                if (i === 18) {
                    if ((input[i] === 10) && (input[i + 1] < 10)) {
                        scoreArray[i] = 10;
                        scoreArray[i + 1] = 10;
                        // console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );
                    }
                    if ((input[i] === 10) && (input[i + 1] === 10)) {
                        scoreArray[i] = 10;
                        scoreArray[i + 1] = 10;
                        scoreArray[i + 2] = 10;
                        // console.log(i + ' ' + scoreArray[i] + ' strike input ' + input[i] );
                    }
                }
            }
        }
        return score(scoreArray);
    }
    return 'Game stauts - invalid input!'
}

module.exports = { pins, score, checkGameStatus };
