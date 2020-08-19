/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
 let hola;
 let precio;
 let peso;
 let tipo;
 let acumPeso=0;
 let LiquidoMasCaro;
 let marcaLiquidoMasCaro;
 let marcaSolidoMasBarato;
 let banderaLiquido=0;
 let banderaSolido=0;
 let respuesta='s';
 let precioMinimo;

do
{


	marca=prompt("ingrese la marca");


do
{
	precio=parseInt(prompt("ingrese el precio"));
}while(precio<1 || precio>100);

do
{
	peso=parseInt(prompt("ingrese el peso"));
}while(peso<1 || peso>100);

do
{
	tipo=prompt("ingrese el tipo");
}while(tipo!="liquido" && tipo!="solido");


acumPeso=acumPeso+peso;


switch(tipo)
{
	case"liquido":
	{
		if(banderaLiquido==0 || LiquidoMasCaro<precio)
		{
			LiquidoMasCaro=precio;
			marcaLiquidoMasCaro=marca;
			banderaLiquido=1;
		}
	}
		break;

		default:
		{
			if(banderaSolido ==0 || precioMinimo>precio)
			{   
				precioMinimo=precio;
				marcaSolidoMasBarato=marca;
				banderaSolido=1;
			}
			
			break;
		}
	}


respuesta=prompt("desea agregar otro producto?");

}while(respuesta=='s');


document.write("el peso total de la compra "+ acumPeso + "<br>");

if(banderaLiquido==1)
{
document.write("la marca del más caro de los líquidos "+ marcaLiquidoMasCaro + "<br>");
}

if(banderaSolido==1)
{
document.write("la marca del más barato de los sólidos "+ marcaSolidoMasBarato + "<br>");
}
}
