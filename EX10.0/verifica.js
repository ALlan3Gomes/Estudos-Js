function verifica() {

  var nome = document.getElementById("nome").value
  var idade = document.getElementById("idade").value

  if (nome === "" || idade === "") {
    alert("Coloque as informacoes")
  }
  else {
    document.getElementById("mostra").innerText = "Nome:" + nome + "\nIdade:" + idade;
    //  var resultado = "Nome:"+ nome + "\nIdade:" + idade;
    // document.getElementById("mostra").innerText = resultado 
  }
}