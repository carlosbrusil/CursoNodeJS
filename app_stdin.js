var nombre;
process.stdout.write(" ingresa tu nombre ");
process.stdin.on('data',function(data){
    nombre=data.toString().trim();
    process.stdout.write(` El nombre leido es: ${nombre}`);
    process.exit();

});
process.stdout.write(__dirname);

