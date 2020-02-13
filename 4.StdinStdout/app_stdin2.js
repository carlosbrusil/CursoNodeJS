var preguntas=['nombre ','edad ','direccion '];
var respuestas=[];

function escribe(i){
    process.stdout.write(preguntas[i]);
};
escribe(0);
process.stdin.on('data',function(data){
    respuestas.push(data.toString().trim());
    if (respuestas.length<preguntas.length){
        escribe(respuestas.length);
    }else{
        process.stdout.write(`resultado ${respuestas}`);
        process.exit();
    }
});

//escribe(0);