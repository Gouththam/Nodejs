var http = require('http');
var caps = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(caps("Uki is the best place to learn programming !"));
    res.end();
}).listen(8080);
