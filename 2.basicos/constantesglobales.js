//        _dirname        DIRECTORIO ACTUAL
//        _filename       ARCHIVO ACTUAL DEL PROGRAMA EN EJECUCION
//
console.log(`El directorio es ${__dirname}`);
console.log(`El archivo del programa actual es ${__filename}`);
//
// FUNCION CONTENIDA EN OBJETO PATH, para encontrar solo el nombre del programa
// se utiliza el modulo PATH 
var path=require("path");
console.log(`El archivo unico del programa es ${path.basename(__filename)}`);