function invertirTexto() {

    // Obtener el texto de entrada
    let texto = document.getElementById("textoEntrada").value;

    // Invertir la cadena
    let textoInvertido = texto.split("").reverse().join("");

    // Mostrar el resultado
    document.getElementById("textoSalida").value = textoInvertido;
}