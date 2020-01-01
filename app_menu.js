var preguntas=['nombre ','edad ','direccion '];
var respuestas=[];
var opcion=0;
function escribe(i){
    process.stdout.write("1.- SUMA\n");
    process.stdout.write("2.- RESTA\n");
    process.stdout.write("3.- SALIR\n");
    process.stdout.write("     Que opcion desea ");
}
process.stdin.on('data',function(data){
    opcion=data.toString().trim().valueOf();
    switch (opcion){
        case "1":
            process.stdout.write("SUMA \n");
            break;
        case "2":
            process.stdout.write("RESTA \n");
            break;
        case "3":
            process.exit();
        default:
            process.stdout.write("valor es" + opcion + "Error, escoga otra vez \n");
    }
    if (respuestas.length<preguntas.length){
        escribe(respuestas.length);
    }else{
        process.exit();
    }
});
escribe(0);