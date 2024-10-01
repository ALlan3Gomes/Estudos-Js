function numeros() {
    var numero1, numero2, numero3, numero4, numero5, total;

    numero1 = parseFloat(prompt("Qual o numero 1:"))
    numero2 = parseFloat(prompt("Qual o numero 2:"))
    numero3 = parseFloat(prompt("Qual o numero 3:"))
    numero4 = parseFloat(prompt("Qual o numero 4:"))
    numero5 = parseFloat(prompt("Qual o numero 5:"))

    total = numero1 + numero2 + numero3 + numero4 + numero5

    alert(total)
    document.getElementById("resultado").innerHTML = "A soma dos números : " + numero1 + " + " + numero2 + " + " + numero3 + " + " + numero4 + " + " + numero5 + " = " + total;
} 