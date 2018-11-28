var http = require('http');
var url = require('url');
var Decoder = require("string_decoder").StringDecoder;

const server={};
server.http=http.createServer((re, res) => {
    var parsedUrl = url.parse(req.url, true);
    console.log("Parsed url is ", parsedUrl);
    var decoder = new Decoder("utf-8");
    var buffer = "";
    req.on('data', (data) => {
        buffer = buffer + decoder.write(data);
    });
    req.on('end', () => {
        buffer = buffer + decoder.end();
    })

});

server.init=function(){server.http.listen(3000,()=>console.log("Running Succesfully"));
}
module.exports=server;
