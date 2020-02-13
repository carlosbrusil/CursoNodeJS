var readline=require('readline');
var rl=readline.createInterface(process.stdin,process.stdout);
rl.question("Cual es tu nombre ",(entrada)=>{
    console.log(`Tu nombre es ${entrada}`);
    process.exit();
});