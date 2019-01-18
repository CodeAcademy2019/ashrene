let http = require('./node_modules/q-io/http')
let parsed = (httpArg) => {
    let result = http.read(httpArg) //https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
    result=result.then((result) => JSON.parse(result))
    result.then(console.log)
    return result
}

parsed('http://localhost:1337');

module.exports = parsed