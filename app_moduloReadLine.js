var readline=require('readline');
var util=require('util');
var rl=readline.createInterface(process.stdin,process.stdout);
var persona={
        nombre:'',
        observaciones:[]
};
var mensaje;
rl.question("Cual es tu nombre ",(res1)=>{
    persona.nombre=res1.trim();
    console.log("Hola ",persona.nombre);
    rl.setPrompt('Dime observacion ');
    rl.prompt();
});
rl.on('line',(entrada)=>{
    if (entrada.trim()==='salir'){
        mensaje=util.format('nombre= %s observaciones= %j',persona.nombre,persona.observaciones);
        console.log(mensaje);
        process.exit();
    }
    rl.setPrompt('Siguiente observacion ');
    rl.prompt();
    persona.observaciones.push(entrada.trim());
});