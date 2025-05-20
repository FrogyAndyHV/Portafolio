

function calculo() {
    var n1 = document.getElementById("horas").value;
    var tipo = document.getElementById("auto").value; 

    var tarifa;

    if (tipo === "1") {
        tarifa = 20;
    } else if (tipo === "2") {
        tarifa = 30;
    } else if (tipo === "3") {
        tarifa = 40;
    }

    var total = parseFloat(n1) * tarifa;
        document.getElementById("resultado").innerHTML = "$" + total;
    /*if (!isNaN(n1) && tarifa) {
        var total = parseFloat(n1) * tarifa;
        document.getElementById("resultado").innerHTML = "$" + total;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor ingresa valores válidos.";
    }*/
}
