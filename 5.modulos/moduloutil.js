var util=require("util");
var v8=require("v8");
var nombre="carlos";
var ape="brusil";
var edad=61;
var dato=util.format("%s %s %f",nombre,ape,edad);
console.log(dato);
console.log(v8.getHeapStatistics());
