let http = require('http');

http.createServer(funtion (rep, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello world');
}).listen(9000);