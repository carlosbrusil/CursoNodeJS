const http=require('http');

http.createServer(function (req,res){
    res.writeHead(404,{'content-type':'text/html'});
    res.write('<h1>creando servidor cbc</>');
    res.end;}
).listen(3000);
