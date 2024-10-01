function calcular() {
    // Obter os valores dos inputs
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var tipoOperacao = document.getElementById("tipoOperacao").value;
    var resultado;

    // Verificar qual operação foi selecionada e realizar o cálculo
    if (tipoOperacao === "soma") {
        resultado = n1 + n2;
    } else if (tipoOperacao === "subtracao") {
        resultado = n1 - n2;
    } else if (tipoOperacao === "multiplicacao") {
        resultado = n1 * n2;
    } else if (tipoOperacao === "divisao") {
        if (n2 === 0) {
            resultado = "Erro: Divisão por zero!";
        } else {
            resultado = n1 / n2;
        }
    }

    // Exibir o resultado na div de resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert(resultado)
}
