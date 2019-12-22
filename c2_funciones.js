function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function divi(a,b){
    if (b==0) {
        console.log("no se puede dividir porque divisor es 0");
    } else
        return a/b;


}

exports.suma=suma;
exports.resta=resta;
exports.multiplica=multi;
exports.divide=divi;