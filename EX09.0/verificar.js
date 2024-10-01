function verifica(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if(nome === "" || idade === "")
      alert("Coloque as informacoes")
    else{
      alert("Nome: "+ nome + "\nIdade: " + idade)
    }
  }