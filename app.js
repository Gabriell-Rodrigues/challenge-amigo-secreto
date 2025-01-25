let amigos = [];

function adicionarAmigo() {
  if (document.getElementById("amigo").value == "") {
    alert("Por favor, insira um nome.");
  } else {
    let nomes = document.getElementById("amigo").value;
    amigos.push(nomes);
  }
  limparCampo();
  percorrendoArrey();
  console.log(amigos);
}

function limparCampo() {
  let campo = document.querySelector("#amigo");
  campo.value = "";
}

function percorrendoArrey() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
