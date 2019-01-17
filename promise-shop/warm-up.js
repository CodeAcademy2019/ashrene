// let asyncFn = () =>{
//     console.log('TIMED OUT!');
//     return 'TIMED OUT!';  
// }

// setTimeout(() => asyncFn(),300);

let asyncFn = () => (
    setTimeout(() => console.log('TIMED OUT!'),300)
)
asyncFn();
module.exports = asyncFn