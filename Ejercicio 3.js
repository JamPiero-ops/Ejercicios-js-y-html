function verificar() {

    let letra = document.getElementById("letra").value;

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
        letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {

        document.getElementById("resultado").innerHTML = "Es una vocal";

    } else {

        document.getElementById("resultado").innerHTML = "Es una consonante";
    }
}
