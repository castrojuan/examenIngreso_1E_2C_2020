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
  }while(!(IsNaN(nombre)));
  console.log(nombre);
}


} 