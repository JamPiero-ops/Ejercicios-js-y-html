function calcularArea() {
    let radio = Number(document.getElementById("radio").value);

    let area = Math.PI * radio * radio;

    document.getElementById("resultado").innerHTML =
        "Radio: " + radio + "<br>Área: " + area.toFixed(2);
}