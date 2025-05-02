function leer() {
	// body...
	var nombre=document.forms["formulario"].elements[0].value;

	//Referencia por ID
	var clave=document.getElementById("pass").value;

	//Referencia por TagName
	var car=document.getElementsByTagName("select")[0].value;

	//Referencia por Name
	var gen=document.getElementsByName("genero");

	var i,g;
	for(i=0; i<gen.length;i++){
		if(gen[i].checked){
			g=gen[i].value;
		}
	}

	var p=document.getElementById("privacidad").checked;

	document.getElementById("datos").innerHTML="\<br>Nombre: "+
	nombre+ "\<br>Contraseña: "+clave+"\<br>Tu carrera es: "+car+
	"\<br>Tu genero es: "+g+ "\<br>Aceptó el acuerdo: "+p;
}