var tabla=0;
function inicio(){
    //alert("hola mundo");
    // variables
    //tabla=document.getElementById("variable1");
    tabla=document.getElementById("variable1").value;
    var cont4=document.getElementById("cont4");
    //alert(" la tabla es "+ tabla);
    //
    // eventos de numeros
    calcular.onclick=function(e){
        tabla=document.getElementById("variable1").value;
        //var cont4=document.getElementById("cont4");
        //alert(" la tabla es "+ tabla);       
        //let metersInput = document.querySelector('#meters')

        resolver();
    }
    //var parrafo=document.getElementById("cont4");

   
}
//

function resolver(){
    var text = document.createTextNode("TABLA DEL "+tabla);

    //document.getElementById("cont4").append(text); 
    cont4.textContent="tabla del " + tabla
    //var newdoc = document.createElement('p');
    //newdoc.appendChild(text); 
    //document.getElementsByTagName('p')[0].appendChild(newdoc);                                         
    for (var i=1; i<=10;i++){
        var res=tabla *i;
        var text = document.createTextNode(`  ${i} *  ${tabla}  =  ${res} `);                               
        //document.getElementById("cont4").appendChild(text); 
        var newdoc = document.createElement('p');
        newdoc.appendChild(text); 
        document.getElementsByTagName('p')[0].appendChild(newdoc); 
    }
    //resetear();
    //resultado.textContent=resultado.textContent+"\n"+res;
}