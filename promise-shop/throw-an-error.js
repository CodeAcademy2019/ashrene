//const json = process.argv[2];
const parsePromised = (arg) => (
    
    new Promise((fulfill,reject)=>{
        try{ 
            fulfill(JSON.parse(arg))
            
        }
        catch(error){
            reject(error.message)
        }
    })
)

const testFn = (json) =>{
    let promise= parsePromised(json);
    promise.then(console.log,console.log);
    return promise;
}
//testFn('{"Name":"Ashrene","Age":21}')

module.exports = testFn
