var preguntas=['nombre ','edad ','direccion '];
var respuestas=[];
function escribe(i){
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data',function(data){
    respuestas.push(data.toString().trim());
    if (respuestas.length<preguntas.length){
        escribe(respuestas.length);
    }else{
        process.exit();
    }
});
escribe(0);