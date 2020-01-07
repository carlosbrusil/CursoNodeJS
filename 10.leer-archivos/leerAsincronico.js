var fs=require('fs');
fs.readdir('./',(eror,archivos)=>{
    if (eror){
        throw eror;
    }
    console.log(archivos);
    fs.readFile('./archivo.txt','UTF-8',(error,file)=>{
        if (error){
            throw error;
        }
        
        console.log(file);
    });
    console.log('contenido del archivo.. ');
});