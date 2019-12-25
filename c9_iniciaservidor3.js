// asignamos una constante http para utilizar las funciones de la 
//           libreria http
const http=require('http');
//
// invocamos a la funcion para crear el servidor
//
// optimizamos el proceso crearservidor definiendo la funcion afuera
const defineservidor=function (req,res)
{
    // definimos el tipo de respuesta que se dara
    // a los diferentes CODIGOS DE ESTADO HTML
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>creando servidor tecnosig</>');
    res.end;
}
/*
    http.createServer(function (req,res){
    // definimos el tipo de respuesta que se dara
    // a los diferentes CODIGOS DE ESTADO HTML
    // en este caso 200 cuando el servidor ha respondido OK
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>creando servidor cbc</>');
    res.end;}
).listen(3000);// los resultados, mensajes y demas se escuchan por el puerto 3000
*/
//
// se asigna una constante servidor
const server=http.createServer(defineservidor);
server.listen(3000,function(){
    console.log("se esta escuchando el servido en puerto 3000")
});