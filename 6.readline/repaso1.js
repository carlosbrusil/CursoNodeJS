var readline=require("readline");                // modulo readline
var util=require("util");                        // modulo util para formatear una variable de salida
//
var rl=readline.createInterface(process.stdin,process.stdout); m  // se crea una instancia para ser utilizada rl
//
var persona={nombre:"",comentarios:[]};
var resultado="";
//
// el metodo question nos permite desplegar una pregunta y esperar por una entrada o respuesta a ella
rl.question("Cual es tu nombre ",(entrada)=>{
    persona.nombre=entrada.trim();
 //   console.log(`Hola ${nombre}`);
 //   process.exit();
    rl.setPrompt("Dime un comentario ");     // asigna un prompt o mensaje a ser utilizado luego
    rl.prompt();                             // presenta el prompt asignado para esperar una respuesta
})
rl.on("line",(msj)=>{           // el metodo on se utiliza para operar las entradas realizadas por linea, del prompt
    if (msj.trim()==="salir")
    {
            resultado=util.format("Tu nombre es %s y esto me dijiste %j",persona.nombre,persona.comentarios);
            //
            console.log(resultado);       // presenta el resultado formateado de acuerdo a modulo util
            //
            console.log(persona);         // presenta la estructura con el nombre del campo y contenido
            process.exit();
    }
    persona.comentarios.push(msj.trim());
    rl.setPrompt("Dime un comentario ");
    rl.prompt();
});
