var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', (err, data) => {
	        if (err) throw err;
	        response.write(data);
	        response.end();       
	    });
		
	} else {
		response.statusCode = 404;
		response.write('<img src=./404.jpg alt=error height=400px width=400px>');
		response.end();
	}
});

server.listen(9000);