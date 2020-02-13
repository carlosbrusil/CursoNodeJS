var nombre;
process.stdout.write("Ingresa tu nombre ");
process.stdin.on("data",function(entrada){
    nombre=entrada.toString().trim();
    process.stdout.write(`Tu nombre es ${nombre}`);
    process.exit();
});
