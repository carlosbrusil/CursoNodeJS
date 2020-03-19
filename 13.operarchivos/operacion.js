var fs=require('fs');
//
// renombrar archivo
console.log("el contenido inicial de ../11.escribir-archivos ");
var files = fs.readdirSync('../11.escribir-archivos');
console.log(files);
fs.renameSync('../11.escribir-archivos/documento2.txt','../11.escribir-archivos/documento.txt');
console.log("El directorio cambiado es ");
files=fs.readdirSync('../11.escribir-archivos');
console.log(files);
//
// copiar
fs.copyFileSync('../11.escribir-archivos/documento.txt','./archivo.txt');
files=fs.readdirSync('./');
console.log('el archivo copiado es '+files);
