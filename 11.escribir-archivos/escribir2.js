var fs=require('fs');
// chequear si el archivo existe
var  archivo="../10.leer-archivos/archivo.txt";
if (!fs.existsSync(archivo))    {console.log("archivo no existe CHEQUEO 1");
    //process.exit();
}
else
    console.log("archivo existe");
//  leeer archivo sincronicamente
var salida=fs.readFileSync(archivo,"UTF-8");
console.log(" El contenido original del archivo es \n",salida);
// leer archivo de forma asincronica
fs.access(archivo,fs.constants.F_OK,(err)=>{
    if (err){
        console.log("no existe archivo CHEQUEO 2");
        // escribir archivo 1er vez de forma asincronica

        var primeralinea="Mateo Alejandro      Pastaza 146          2330110";
        fs.writeFile(archivo,primeralinea,(err)=>{
        if (err)
            {console.log("no se puede escribir en archivo.txt la 1era vez");
            process.exit();}
        else
            console.log("se creo nueva contenido");
        });
    }
    else 
    console.log("agregar");
        var nuevalinea="\nCarlos Brusil        Bolivar 311          0968438440";
        fs.appendFile(archivo,nuevalinea,(err)=>{
            if(err){console.log("no pudo agregar ");process.exit()}
            else
                console.log("Se agrego nueva linea");
        }
        )
}
    )



