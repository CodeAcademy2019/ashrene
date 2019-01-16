function getShortMessages(messages){
    return messages.filter(function(m){
        if(m.message.length<50){
            return m.message;
        }
    }).map(function(currVal){
        return currVal.message;
    });
}

module.exports = getShortMessages