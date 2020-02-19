var operandoa;
var operandob;
var operacion;
var estado=true;
var M;
var RM;
var tabla;
function inicio(){
    //alert("hola mundo");
    // variables
    var resultado=document.getElementById("resultado");
    var reset=document.getElementById("reset");
    var igual=document.getElementById("igual");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var multiplica=document.getElementById("multiplicacion");
    var divide=document.getElementById("division");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var cero=document.getElementById("cero");
    var punto=document.getElementById("punto");
    var memoria=document.getElementById("memoria");
    var sacarmemoria=document.getElementById("sacarmemoria");
    var raiz=document.getElementById("raiz");
    var salir=document.getElementById("Salir");
    var version=document.getElementById("Version");
    //
    // eventos de numeros
    uno.onclick=function(e){
        resultado.textContent= "TABLA DEL 1";
        tabla =1;
    }
    dos.onclick=function(e){
        resultado.textContent="TABLA DEL 2";
        tabla=2;
    }    
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent + "3";
    }    
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent + "4";
    }    
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent + "5";
    }    
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent + "6";
    }    
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent + "7";
    }    
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent + "8";
    }    
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent + "9";
    }    
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent + "0";
    }
    punto.onclick=function(e){
        resultado.textContent=resultado.textContent+".";
        // aqui desactivar boton punto para evitar ingresarlo de nuevo
        activapunto(false);
    }
    //
    // eventos de botones memoria
    memoria.onclick=function(e){
        M=resultado.textContent;
    }
    sacarmemoria.onclick=function(e){
        resultado.textContent=M;
    }
    //
    // eventos de botones de funciones
    reset.onclick=function(e){
        resetear();
    }
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplica.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiar();
    }
    divide.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiar();
    }
    raiz.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="^";
    }
    igual.onclick=function(e){
        //operandob=resultado.textContent;
        resolver();
    }
    //
    salir.onclick=function(e){
        //process.exit();
        window.close();
    }
    version.onclick=function(e){
        resetear();
        resultado.textContent="Version 1.0 CB";
    }
    
}
//
// funcion desactivar-activar boton punto
function activapunto(estado){
    punto.disabled=!estado;     // negacion de un estado logico
}
function limpiar(){
    resultado.textContent="";
    //resultado.textContent=resultado.textContent+"\n";
    activapunto(true);
}
function resetear(){
    resultado.textContent="";
    //resultado.textContent=resultado.textContent+"\n";
    operandoa="";
    operandob="";
    operacion="";
    activapunto(true);
}
//
// funcion para resolver las operaciones matematicas
function resolver(){
    var text = document.createTextNode("TABLA DEL "+tabla);
    //document.getElementById("cont4").append(text); 
    var newdoc = document.createElement('p');
    newdoc.appendChild(text); 
    document.getElementsByTagName('p')[0].appendChild(newdoc);                                         
    for (var i=1; i<=10;i++){
        var res=tabla *i;
        var text = document.createTextNode(`  ${i} *  ${tabla}  =  ${res} `);                               
        //document.getElementById("cont4").appendChild(text); 
        var newdoc = document.createElement('p');
        newdoc.appendChild(text); 
        document.getElementsByTagName('p')[0].appendChild(newdoc); 
    }
    resetear();
    //resultado.textContent=resultado.textContent+"\n"+res;
}