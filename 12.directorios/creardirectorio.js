var fs=require('fs');
// creacion de carpeta de forma syncrona
if (fs.existsSync('img')){
    console.log('directorio IMG ya existe');

}else{
    fs.mkdirSync('img');
    console.log('Directorio creado');
};
if (fs.existsSync('css')){
    console.log('directorio CSS ya existe');
}else{
    fs.mkdir('css',(err)=>{
        if (err) throw(' Error ',err);
        console.log('el directorio CSS ha sido creado');
    })
};

