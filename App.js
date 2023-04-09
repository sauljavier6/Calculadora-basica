function calcular() {
	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);
	var operacion = document.getElementById("operacion").value;
	var resultado;

	switch (operacion) {
		case "sumar":
			resultado = numero1 + numero2;
			break;

		case "restar":
			resultado = numero1 - numero2;
			break;

		case "multiplicar":
			resultado = numero1 * numero2;
			break;

		case "dividir":
			resultado = numero1 / numero2;
			break;

		default:
			resultado = "Operación inválida";
			break;
	}

	document.getElementById("resultado").innerHTML = resultado;
}
