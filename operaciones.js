function sumar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//var answ=n1+n2; esto no funcionaría pues solo lo concatena
	var answ=parseInt(n1)+parseInt(n2);
	document.getElementById("resultado").innerHTML=answ;
}
function restar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//var answ=n1+n2; esto no funcionaría pues solo lo concatena
	var answ=parseInt(n1)-parseInt(n2);
	document.getElementById("resultado").innerHTML=answ;
}
function multiplicar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//var answ=n1+n2; esto no funcionaría pues solo lo concatena
	var answ=parseInt(n1)*parseInt(n2);
	document.getElementById("resultado").innerHTML=answ;
}
function dividir(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	//var answ=n1+n2; esto no funcionaría pues solo lo concatena
	var answ=parseFloat(n1)/parseFloat(n2);
	document.getElementById("resultado").innerHTML=answ;
}