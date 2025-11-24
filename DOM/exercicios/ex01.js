// Crie um botão que, ao ser clicado, adiciona um parágrafo novo no body escrito: “Novo parágrafo criado!”

const button = document.querySelector("#button");
const body = document.body;

button.onclick = function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Novo parágrafo criado!";
    body.append(paragraph);
    console.log("clicou");
};