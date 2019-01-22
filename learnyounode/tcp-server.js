const net = require('net');

const server = net.createServer((socket) => {
    const d = new Date();
    let month = d.getMonth() + 1;
    let m = '';
    if (month<10) {
        m = '0'+month;
    }
    const dateString = d.getFullYear()+'-'+m+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+'\n';
    socket.end(dateString);
    
});

server.listen(process.argv[2]);