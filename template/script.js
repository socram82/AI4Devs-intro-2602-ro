function invertirTexto(){

    // Obtener texto de la caja
    let texto = document.getElementById("entrada").value;

    // Invertir la cadena
    let invertido = texto.split("").reverse().join("");

    // Mostrar el resultado
    document.getElementById("resultado").value = invertido;

}
