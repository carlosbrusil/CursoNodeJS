const fs=require('fs');
fs.writeFile('text.text',"1.- Carlos Brusil Calle",function (err){
    if (err){
        console.log("error"+err.name);
    }
    else{
        console.log("el archivo se ha creado");
    }
});
console.log("ultima linea");
//
// leer el archivo
//
console.log("");
console.log("LEYENDO EL ARCHIVO");
fs.readFile('./text.text',function(err,dato){
    if (err){
        console.log("error al leer "+err);
    }else{
        console.log(dato.toString());
    }

});
console.log("fin de lectura");