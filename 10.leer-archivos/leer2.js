var fs=require("fs");
fs.readdir("./",(err,contenido)=>{
    if (err){
        console.log("error leyendo directorio actual");
        process.exit();
    }
    // proceso SYNCRONICO para leer el archivo del directorio de a lado
    console.log("contenido del directorio actual es \n",contenido);
    var salida=fs.readFileSync("../9.EjecutarProcesos/script.bat","UTF-8");
    console.log("El contenido de archivo en el  directorio de a lado es \n",salida);
    //
    // proceso ASINCRONICO para leer el archivo del directorio actual
    fs.readFile("./archivo.txt","UTF-8",(err2,salida2)=>{
        if (err2){
            console.log("error leyendo archivo.txt");
            process.exit();
        }
        console.log(salida2);

    })
    console.log("\ncontenido del archivo.txt es");   // en el proceso asincronico
                                                     // esta orden se ejecuta antes de readfile
})