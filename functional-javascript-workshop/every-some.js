function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(function(usr){
            return goodUsers.some(function(chk){
                return usr.id == chk.id;
            });
        });
    };
}

module.exports = checkUsersValid