var cliente=["carlos","mayte","carolina","mateo"];
function busca(p){
    console.log("el valor buscado es "+cliente[p]);
};
console.log(process.argv);
console.log("parametro cero "+process.argv[0]);
console.log("parametro uno  "+process.argv[1]);
//console.log("parametro dos  "+process.argv[2]);
busca(2);
