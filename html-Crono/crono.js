
function inicio(){
    //alert("hola mundo");
    var hC=0,mC=0,sC=0;
    var prendercronometro=false;
    var actualizahora=function(){
        var fecha=new Date(),
            horas=fecha.getHours(),
            ampm,
            minutos=fecha.getMinutes(),
            segundos=fecha.getSeconds(),
            diaSemana=fecha.getDay(),
            dia=fecha.getDate(),
            mes=fecha.getMonth(),
            year=fecha.getFullYear();
        var pHoras=document.getElementById("horas"),
            pMinutos=document.getElementById("minutos"),
            pAMPM=document.getElementById("ampm"),
            pSegundos=document.getElementById("segundos"),
            pDiaSemana=document.getElementById("diaSemana"),
            pDia=document.getElementById("dia"),
            pMes=document.getElementById("mes"),
            pYear=document.getElementById("year");
        // variables para desplegar el cronometro
        var horasC=document.getElementById("horasC"),
            minutosC=document.getElementById("minutosC"),
            segundosC=document.getElementById("segundosC");
            
        // variables para botones del cronometro
        var iniciar=document.getElementById("iniciar"),
            resetear=document.getElementById("resetear");

        // asignacion de tiempo de cronometro
        if (prendercronometro){    // Si el switch  es V iniciamos crono */
            iniciar.textContent="Parar";
            msC=msC+1;
            sC=sC+1;
            if (sC==60){
                sC=0;
                mC=mC+1;
                if (mC==60){
                    hC=hC+1;
                    mC=0;
                }
            }
        }
        else{
            iniciar.textContent="Iniciar";
        }
        iniciar.onclick=function(e){
            prendercronometro=!prendercronometro;
        }
        resetear.onclick=function(e){
            prendercronometro=false;
            hC=0,mC=0,sC=0;
            iniciar.textContent="Iniciar";
        }
        horasC.textContent=hC;
        minutosC.textContent=mC;
        segundosC.textContent=sC;

        var semana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent=semana[diaSemana];
        pDia.textContent=dia;
        var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        pMes.textContent=meses[mes];
        pYear.textContent=year;
        //
        // asignar datos de la hora
        if (horas>12){
            horas=horas-12;
            ampm="PM";
        }
        else{
            ampm="AM";
        }
        if (horas==0){horas=12};                  // si la hora es 0  entonces desplegar 12
        pAMPM.textContent=ampm;
        pHoras.textContent=horas;
        if (minutos<10){minutos="0"+minutos;}     // si minutos menor a 10 se concatena al inicio del # el "0"
        if (segundos<10){segundos="0"+segundos;}  // idem al anterior
        pMinutos.textContent=minutos;
        pSegundos.textContent=segundos;
    }
    actualizahora(); // llamada  a la funcion de actualizar hora
    var intervalo=setInterval(actualizahora,1000); // se fija el intervalo de ejecucion de function     
                                                   // actualizar hora para que ejecute cada segundo
}