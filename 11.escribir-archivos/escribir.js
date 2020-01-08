var fs=require('fs');
var archivo='archivo.txt';
// proceso sincronico para determinar si el archivo existe
/*
if(fs.existsSync(archivo)){
    console.log('Archivo ya existe');
}else{
    console.log('archivo no existe');
}
*/
//
// proceso asincronico para determinar si el archivo existe
fs.access(archivo,fs.constants.F_OK,(err)=>{
    if (err){
        console.log('el archivo no existe');
    }else{
        console.log('el archivo si existe');
    }
});
//
var contenido="Carlos Brusil Calle           Pastaza 146     Urb S. Jorge";
// escribir en el archivo en forma syncronica
/*

fs.writeFileSync(archivo,contenido);
console.log("Se ha escrito en el archivo ",archivo);
*/
//
// escribir en forma asyncrona

/*fs.writeFile(archivo,contenido,(err)=>{
    if (err) throw('se ha producido un error al escribir ');
    console.log("Se ha escrito en el archivo ",archivo);

});
*/
//
// agregar informacion al archivo
var lineanueva="\nMayte Guaman Sanchez       Pastaza 146       Urb. S.Jorge";
fs.appendFile(archivo,lineanueva,(err)=>{
    if (err) throw('Se ha producido un error al agregar ');
    console.log('Se agrego una nueva linea al archivo');
});