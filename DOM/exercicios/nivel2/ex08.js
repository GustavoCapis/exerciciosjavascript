//Crie um botão que remove um parágrafo específico (ex: o primeiro parágrafo da página).
const button = document.querySelector("#button");
const input = document.querySelector("#input");
const article = document.querySelector("#article");


button.onclick = () => {
    const index = Number(input.value) - 1; //o -1 faz com que a contagem seja a partir do 1 e não 0
    const paragrafos = article.querySelectorAll("p");

    paragrafos ? paragrafos[index].remove() : 0;
};