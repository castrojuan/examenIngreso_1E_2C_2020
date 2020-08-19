/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidadPax;
	let respuesta='s';
	let lugarMasElegido;
	let TitularMayorCantidadPax;
	let mayorCantidadPax;
	let contadorInvierno=0;
	let AcumInvierno=0;
	let banderaSexoTitularMasPax=0;
	let contadorBrc=0;
	let contadorSalta=0;
	let contadorCataratas=0;
	





	do
	{
		do
		{
			sexo=prompt("ingrese el sexo m/ f ");
		}while(sexo!="f" && sexo!="m");
	
        do
        {
        	lugar=prompt("ingrese el lugar");
        }while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta");


        do
        {
        	temporada=prompt("ingrese la temporada");
        }while(temporada!="verano" && temporada!="invierno" && temporada!="otoño" && temporada!="primavera");

        do
        {
        	cantidadPax=parseFloat(prompt("ingrese la cantidadde pasajeros"));
        }while(cantidadPax<1 || cantidadPax>30);


        if(banderaSexoTitularMasPax==0 || mayorCantidadPax<cantidadPax)
        {
        	mayorCantidadPax=cantidadPax;
        	TitularMayorCantidadPax=sexo;
        	banderaSexoTitularMasPax=1;
        }

        if(temporada=="invierno")
        {
        	contadorInvierno++;
        	AcumInvierno=AcumInvierno+cantidadPax;
        }


        switch(lugar)
        {
        	case "cataratas":
        	{
        		contadorCataratas++;
        	}
        	break;
        	case"bariloche":
        	{
        		contadorBrc++;
        	}
        	break;
        	default:
        	{
        		contadorSalta++;
        	}
        	break;

        }



        respuesta=prompt("desea agregar otro pasajero?");
	}while(respuesta=='s');


     if(contadorSalta>contadorBrc && contadorSalta>contadorCataratas)
     {
     	lugarMasElegido="salta";
     }

     else if(lugar=="bariloche")
     {
     	lugarMasElegido="bariloche";
     }

     else
     {
     	lugarMasElegido="cataratas";
     }





alert("el lugar más elegido " + lugarMasElegido);
alert("el sexo de titular que lleva más pasajeros es " + TitularMayorCantidadPax);
alert("el promedio de personas por viaje,  que viajan en invierno es "+ AcumInvierno/contadorInvierno);





}
