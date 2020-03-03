const exec=require("child_process").exec
exec("cd ..",(error,salida)=>{
    if (error){
        console.log("error al cambiar al nivel superior");
        process.exit();
    }
    console.log("La informacion del directorio superior es");
    console.log(salida);
}
);
exec("dir",(err,sal)=>{// se comprueba que lista el directorio actual del programa
    if (err){
        console.log("error al listar directorio");
        process.exit();
    }
    console.log(sal);
}
);
//
// para listar un directorio en otra posicion, es necesario un scrip.bat
//                en el cual primero nos pasamos a el mediente  cd
//                y luego lo listamos mediante el comando       dir
//
exec("script.bat",(err2,sal2)=>{
    if (err2){
        console.log("error en script.bat");
        process.exit();
    }
    console.log("Bat ejecutador");
    console.log(sal2);
})
