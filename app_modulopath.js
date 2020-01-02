var path=require('path');
var util=require('util');
var v8 = require('v8');
var fuente=path.basename(__filename);
var directorio=path.basename(__dirname);
var direccion=util.format("La direccion es: %s / %s",directorio,fuente);
//console.log("nombre del archivo fuente   "+path.basename(__filename));
//console.log("nombre del directorio actual"+path.basename(__dirname));
console.log(direccion);
//
// util.log nos presenta ademas de la impresion de lo que esta en comillas 
//      tambien genera la fecha y hora del sistema
//      o "TIME STAMP"
util.log(' estadisticas actuales \n',  v8.getHeapStatistics());
