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
	let contadormujeres=0;
	let pesomax;
	let hombremax;
	let flag=0;
	let contador=0;
	let acumtotal=0;
	let promedio;





	for(let i=0 ; i<5; i++)

{
		
			nombre=prompt("ingrese su nombre");


	    do{
	    	peso=parseInt(prompt("ingrese el peso"));
         }while(peso<0 && peso>400);

        do{
        	sexo=prompt("ingrese el sexo");
        }while(sexo!="f" && sexo!="m");

        do{
        	edad=prompt("ingrese su edad");
        }while(edad<0 || edad>110);

    
    contador++;
    acumtotal=acumtotal+edad;
    

  if(sexo=="f")
   {
   	contadormujeres++;
   }

if(sexo=="m")
{
 	pesomax=peso;
    hombremax=nombre;
    flag=1;
}
if(pesomax<pesomax)
{
	pesomax=peso;
	hombremax=nombre;
}

}

promedio=acumtotal/contador;

document.write("la cantidad de mujeres es " + contadormujeres +"<br>");
document.write("la edad promedio es " + promedio + "<br>");
document.write("el hombre mas pesado es " + hombremax + " y pesa " + pesomax + "<br>");


}
