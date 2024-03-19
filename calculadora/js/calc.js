

function botao( num )
{
	var salvo = document.calc.visor.value;
	document.calc.visor.value = salvo + num;
}

function reset()
{
	//codigo para limpar o visor
	document.calc.visor.value = "";
}
 
 function calcule()
{
	// codigo para calcular o visor
	// pegar o valor do visor em uma variavel
	// fazer o calculo
	// pegar o resultado e colocar no visor
	var visor = document.calc.visor.value;
	resultado = eval( visor );
	
	if (resultado == Infinity) {
		resultado = "#DIV/0!";  
	}
	
	document.calc.visor.value = resultado;
}
