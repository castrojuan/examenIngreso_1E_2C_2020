/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta='s';
  let acumpeso=0;
  let liquidocaro;
  let marcaliquido;
  let solidobarato;
  let marcasolido;
  let flagliq=0;
  let flagsol=0;

do
{
	marca=prompt("ingrese marca");

do{
	precio=parseInt(prompt("ingrese el precio"));
}while(precio<0 && precio>5000);

do{
	peso=prompt("ingrese el peso");
}while(peso<0 && peso >100);

do{
	tipo=prompt("ingrese el tipo liquido/solido");
}while(tipo!="liquido" && tipo!="solido");




acumpeso = acumpeso+peso;

if(tipo=="liquido")
{
 liquidocaro=precio;
 marcaliquido=marca;
 flagliq=1;
}

if(liquidocaro<precio)
{   
	liquidocaro=precio;
	marcaliquido=marca;
}

if(tipo=="solido"){
	solidobarato=precio;
	marcasolido=marca;
	flagsol=1;
}

if(solidobarato>precio)
{

	marcasolido=marca;
}


respuesta=prompt("desea agregar otro producto? s/n ");

}while(respuesta=="s");


alert("el peso total de la compra es" + acumpeso);
alert("la marca del más caro de los líquidos es " + marcaliquido);
alert("la marca del mas barato de los solidos es "+ solidobarato);


}
