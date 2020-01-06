var fs=require('fs');
var files=fs.readdirSync('./');

console.log("\n los archivos son");
console.log(files);
var contenido=fs.readFileSync('./archivo.txt','UTF-8');
console.log('\n contenido del archivo');
console.log(contenido);
