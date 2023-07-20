function enviar() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;
  let datahora = document.getElementById("datahora").value;
  let comentario = document.getElementById("comentario").value;

  if (
    nome == "" ||
    telefone == "" ||
    email == "" ||
    datahora == "" ||
    comentario == ""
  ) {
    alert("Por favor, preencha todos os campos");
  } else if (email.indexOf("@") == -1) {
    alert("Email inválido");
  } else {
    alert(`Obrigado pelo seu contato, ${nome}`);
  }
}
