const math=require('./funcionOperaciones.js');
let n1=29;
let n2=3;
var opcion=1;
while(opcion!=5){
    console.clear();
    console.log("");
    console.log("1.- suma");
    console.log("");
    console.log("2.- resta");
    console.log("");
    console.log("3.- multiplicacion");
    console.log("");
    console.log("4.- division"); 
    process.stdout.write("    Que opcion desea ");
    process.stdin.on('data',function(data){
        opcion=data;
        process.stdout.write(' opcion es'+opcion.toString());
            
            process.exit();

    })
    switch (opcion){
        case 1:  console.log("la suma  de "+n1+" y "+n2+ " es: ",math.suma(n1,n2));
                 opcion=5;
                    break;
        case 2:  console.log("la resta de "+n1+" y "+n2+ " es: ",math.resta(n1,n2));
 //               opcion=5;            
                break;
        case 3: console.log("la multiplicacion de "+n1+" y "+n2+ " es: ",math.multiplica(n1,n2));
  //              opcion=5; 
                break;
        case 4:  console.log("la suma  de "+n1+" y "+n2+ " es: ",math.divide(n1,n2));
  //              opcion=5;        
                break;
    } 
   
 
};
console.log(math);
