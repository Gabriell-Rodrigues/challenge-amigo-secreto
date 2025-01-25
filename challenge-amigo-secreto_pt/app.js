//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  if (document.getElementById("amigo").value == "") {
    alert("Por favor, insira um nome.");
  } else {
    let nomes = document.getElementById("amigo").value;
    amigos.push(nomes);
  }
  limparCampo();
  console.log(amigos);
}

function limparCampo() {
  let campo = document.querySelector("#amigo");
  campo.value = "";
}
