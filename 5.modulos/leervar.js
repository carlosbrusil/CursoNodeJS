var readline=require('readline');
var util=require('util');
var rl=readline.createInterface(process.stdin,process.stdout);
var persona={
        nombre:'',
        observaciones:[]
};
var a,b,c=0;
rl.question("Deme primera var ",(res1)=>{
    a=res1.trim();
});
rl.question("Deme segunda var ",(res1)=>{
    b=res1.trim();
});

console.log("variables ",a,b);
