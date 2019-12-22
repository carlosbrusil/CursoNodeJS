function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a+b;
}
function multiplica(a,b){
    return a*b;
}
function divide(a,b){
    if (b==0){
        console.log("No se puede realizar la division - divisor es 0");
    }else
        return a/b;

}
exports.suma =suma;
exports.resta =resta;
exports.multiplica =multiplica;
exports.divide=divide;
