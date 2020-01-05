var readline=require('readline');
var rl=readline.createInterface(process.stdin,process.stdout);

var persona={
    nombre:'',
    edad:0};
rl.question('Ingrese su nombre ',(res1)=>{
    persona.nombre=res1.trim();
    console.log(`Hola ${persona.nombre}`);
    rl.setPrompt("ingrese edad ");
    rl.prompt();
});
rl.on('line',(res2)=>{
    persona.edad=res2.trim().valueOf();
    console.log(persona);
    process.exit();
})

