function verificaSenha() {
  var senha = document.getElementById("senha").value;
  var resultadoDiv = document.getElementById("resultado")

  const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>?]).{8,}$/;

  if (senhaForte.test(senha)) {
    resultadoDiv.textContent = "A senha e forte."
    resultadoDiv.style.color = "green"
  }
  else {
    resultadoDiv.textContent = "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    resultadoDiv.style.color = "red"
  }


}