function qualMaior(){
    var num1 = prompt("Digite o primeiro número:");
    var num2 = prompt("Digite o segundo número:");

    if (num1 > num2) {
        alert("O primeiro número " + num1 + " é maior que segundo número" + num2);
    } else if (num1 < num2) {
        alert("O segundo número " + num2 + " é maior que primeiro número " + num1);
    } else {
        alert("Os números são iguais.");
    }
  }