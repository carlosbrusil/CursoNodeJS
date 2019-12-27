const express=require("express");
const colors=require("colors");
const serv=express();
//
// define el servidor con express
//
// .get sirve para cambiar el mensaje default que presenta express 
//       al crear el servidor para cambiar por mensaje
serv.get("/",function(req,res){
     res.send("<h1>Hola mundo desde express y npm</h1>");
     res.end;
})
 serv.listen("3000",function(){
     console.log("escuchando servidor en puerto 3000".cyan);
 });
