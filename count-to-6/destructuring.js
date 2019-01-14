
    let userArray = process.argv.slice(2);
    // what goes here?
    var destructuring = (arr) =>{
        let obj = {};
        [,obj.username,obj.email] = arr;
        return obj
    }

    console.log(destructuring(userArray)); // {username: "jdoe", email: "john@doe.com"}
    module.exports = destructuring