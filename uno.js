/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
   let nombre;
   let peso;
   let sexo;
   let edad;
   let contadorMujeres=0;
   let contadorTotal=0;
   let acumEdad=0;
   let pesoMaximo;
   let HombreMasPesado;
   let bandera=0;


for(let=0;i<5; i++)
{

	do
	{
      nombre=prompt("ingrese un nombre")
    }while(!(IsNaN(nombre)));

    do
    {
    	peso=parseInt("ingrese el peso");
    }while(peso<1 || peso>350);

    do
    {
    	edad=parseInt(prompt("ingrese la edad"));
    }while(edad<1 || edad>110);

    do
    {
    	sexo=prompt("ingrese el sexo");
    }while(sexo!="f" && sexo!="m");


    acumEdad=acumEdad+edad;
    contadorTotal++;

    if(sexo=="f")
    {
    	contadorMujeres++;
    }

    else
    {
    	if(bandera==0 || pesoMaximo<peso)
    	{
    		pesoMaximo=peso;
    		HombreMasPesado=nombre;
    		bandera=1;
    	}
    }

}

 document.write("la cantidad de mujeres es "+ contadorMujeres + "<br>");
 document.write("la edad promedio en total es "+ acumEdad/contadorTotal + "<br>");
 if(bandera==1)
 {
 document.write("el hombre mas pesado es "+ HombreMasPesado + "<br>");
}
}
