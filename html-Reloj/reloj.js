function inicio(){
    alert("hola mundo");
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
        var semana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent=semana[diaSemana];
        pDia.textContent=dia;
        var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        pMes.textContent=meses[mes];
        pYear.textContent=year;
    }
    actualizahora();
}