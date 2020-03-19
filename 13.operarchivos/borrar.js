var fs=require('fs');
var files=fs.readdirSync('./');
console.log('el contenido inicial del directorio es ');
console.log(files);
fs.unlink('archivo.txt',(err)=>{
    if (err){console.log("no se puede borrar ");}
    
});
var files=fs.readdirSync('./');
console.log('el contenido nuevo del directorio es ',files);