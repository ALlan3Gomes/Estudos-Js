function fatorar() {

    var numeroFatorar = parseFloat(prompt("Qual o nuemro que deve ser fatorado:"));

    var resultado = 1
    for (var nRepeticoes = 1; nRepeticoes <= numeroFatorar; nRepeticoes++) {
        resultado = resultado * nRepeticoes
    }
    alert("O fatorial de " + numeroFatorar + " e " + resultado)
}
