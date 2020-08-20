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
let contMujeres=0;
let acumTotal=0;
let contadorTotal=0;
let pesoMaximo;
let HombreMasPesado;
let banderaPeso=0;

for(let i=0; i<5; i++)
{

  do
  {
    nombre=prompt("ingrese nombre");
  }while(!(isNaN(nombre)));


  do
  {
  	peso=parseInt(prompt("ingrese el peso"));
  }while(peso<1 || peso>300 || isNaN(peso));

  do
  {
  	sexo=prompt("ingrese su sexo");
  }while(sexo!="f" && sexo!="m");

  do
  {
  	edad=parseInt(prompt("ingrese la edad"));
  }while(edad<1 || edad>100);


contadorTotal++;
acumTotal=acumTotal+edad;

if(sexo=="f")
{
	contMujeres++;
}

else
{
	if(banderaPeso==0 || pesoMaximo<peso)
	{
		pesoMaximo=peso;
		HombreMasPesado=nombre;
		banderaPeso=1;
	}

}
  

}




document.write("la cantidad de mujeres es " + contMujeres + "<br>");
document.write("la edad promedio en total es " + acumTotal/contadorTotal + "<br>");

if(banderaPeso==1)
{
	document.write("el hombre mas pesado es " + HombreMasPesado + "<br>");
}


}
