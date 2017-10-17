var http = require('http');
var underscore = require('underscore');

//variable declaration
var num = [1, 2, 3];
var newNum = [];
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });

    underscore.map(num, function(num){ 
       newNum.push(num * 3);
    });
    console.log("Numbers are " + newNum);
    response.end("Numbers are " + newNum);

});

server.listen(3000);