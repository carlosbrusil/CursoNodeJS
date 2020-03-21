const fs=require('fs');
const readline=require('readline');
linea=readline.createInterface(process.stdin,process.stdout);
linea.question('Cual es el nombre del archivo ',(entrada)=>{
    let stream=fs.createWriteStream(`./${entrada}.txt`);
    process.stdout.write("que informacion tiene el archivo ");
    stream.write('informacion del archivo es \n');
    linea.on('line',(informacion)=>{
        if(informacion.trim()=='salir')
        {
            stream.close();
            linea.close();
        }
        else
        {
            stream.write(informacion.trim()+'\n');
        }
    })
});