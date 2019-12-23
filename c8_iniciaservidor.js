const http=require('http');

http.createServer(function (req,res){
    res.write('<h1>creando servidor cbc</h1>');
    res.end;}
).listen(3000);
