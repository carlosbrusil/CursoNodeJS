// asignamos una constante http para utilizar las funciones de la libreria http
//           
const http=require('http');
// ********************************************************************
// *   HEMOS INSTALADO EL MODULO COLORS :   desde el modo comando
// *   npm install colors
// *   el resumen de modulos esta en www.npmjs.com
// ********************************************************************
const colors=require('colors');
//
// invocamos a la funcion para crear el servidor
// optimizamos el proceso crearservidor definiendo la funcion afuera
const defineservidor=function (req,res)
{
    // definimos el tipo de respuesta que se dara
    // a los diferentes CODIGOS DE ESTADO HTML
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>creando servidor tecnosig</>');
    res.end;
}
//
// se asigna una constante servidor
const server=http.createServer(defineservidor);
server.listen(3000,function(){
//
// ****** UTILIZAMOS LAS FUNCIONES DE COLOR del modulo npm instalado
//
    console.log("se esta escuchando el servido en puerto 3000".magenta)
});
// ******************************************************************
// *     
// *    1.- para instalar un modulo       
// *        npm install modulo
// *    2.- para iniciar las caracteristicas del proyecto
// *        npm  init
// *    3.- para instalar el proyecto en otro servidor
// *        copiamos archivos de proyecto .js  y archivos .json
// *        npm install
// *****************************************************************