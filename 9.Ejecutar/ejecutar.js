const exec=require('child_process').exec;
exec('dir',(error,salida)=>{
    if(error){
        //throw new Error('error',error);
        console.log('error al listar directorio');
    }
    console.log("comando ejecutado");
    console.log(salida);
});
const x=120;
const y=25;
exec('script.bat '+x+' '+ y,(err,sal)=>{
    if (err){
        throw ('error',err);
        //console.log("error al ejecutar scrip.bat")
    }
    console.log("ejecucion de un comando 2 ");
    console.log(sal);
});
