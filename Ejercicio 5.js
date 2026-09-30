function calcularFactorial() {

    let numero = Number(document.getElementById("numero").value);
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    document.getElementById("resultado").innerHTML =
        "El factorial es: " + factorial;
}
