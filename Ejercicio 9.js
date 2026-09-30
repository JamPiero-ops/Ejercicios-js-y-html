function verificarCapicua() {
    let numero = Number(document.getElementById("numero").value);

    let centenas = Math.floor(numero / 100);
    let unidades = numero % 10;

    if (centenas == unidades) {
        document.getElementById("resultado").innerHTML =
            "Número: " + numero + "<br>Es capicúa";
    } else {
        document.getElementById("resultado").innerHTML =
            "Número: " + numero + "<br>No es capicúa";
    }
}