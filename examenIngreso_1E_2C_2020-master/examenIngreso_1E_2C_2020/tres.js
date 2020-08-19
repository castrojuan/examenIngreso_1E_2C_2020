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
	let cantidad;
	let respuesta='s';
	let contadorbrc=0;
	let contadorsalt=0;
	let contadorcat=0;
	let sexotitular;
	let mayorpax=0;
	let acuminv=0;
	let contadorinv=0;
	let lugarmaselegido;



do
{

do{
      sexo=prompt("ingrese el sexo");
     }while(sexo!="f" && sexo!="m");

do{
	lugar=prompt("ingrese el lugar");
}while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta");     

do{
	temporada=prompt("ingrese la temporada");
}while(temporada!="otoño" && temporada!="invierno" && temporada!="primavera" && temporada!="verano");

do{
	cantidad=prompt("ingrese la cantidad de personas que viajan");
}while(cantidad<0 && cantidad>15);


if(temporada=="invierno")
{
	contadorinv++;
	acuminv=acuminv+cantidad;
}

switch(lugar)
{
	case(bariloche):
	contadorbrc++;
	break;

	case(cataratas):
	contadorcat++;
	break;

	case(salta):
	contadorsalt++;
	break;

}

if(contadorbrc>contadorsalt && contadorbrc>contadorcat)
{
	lugarmaselegido="bariloche";
}

else if(contadorcat>contadorbrc && contadorcat>contadorsalt)
	{
		lugarmaselegido="cataratas";
	}

else
{
	lugarmaselegido="salta"
}	


if(flag==0 || mayorpax<cantidad)
{
	mayorpax=cantidad;
	sexotitular=sexo;
	flag=1;
}





respuesta=prompt("desea agregar otro destino");

}while(respuesta=='s');





alert("el lugar más elegido es" + lugarmaselegido);
alert("el sexo de titular que lleva más pasajeros es " + sexotitular);
alert("el promedio de personas por viaje,  que viajan en invierno es " + acuminv/contadorinv); 

}
