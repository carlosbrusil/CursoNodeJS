const exec=require('child_process').exec;
exec('dir',(error,salida)=>{
    if(error){
        throw error;
    }
    console.log("comando ejecutado");
    console.log(salida);
});
const x=120;
const y=25;
exec('script.bat '+x+' '+ y,(err,sal)=>{
    if (err){
        throw err;
    }
    console.log("ejecucion de un comando 2 ");
    console.log(sal);
});
