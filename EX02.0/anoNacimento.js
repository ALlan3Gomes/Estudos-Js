function anoNacimento() {
    var anoNacimento = prompt("Em que ano vc naceu:")

    var idade = new Date().getFullYear() - anoNacimento

    alert("Voce neceu em " + anoNacimento + " logo sua idade e " + idade)
}