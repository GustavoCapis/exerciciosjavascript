// Crie um botão que insere uma imagem nova na página.

const button = document.querySelector("#button");
const article = document.querySelector("#article");

button.onclick = () => {
    const image = document.createElement("img");
    article.append(image);
    image.src = "./imgs/img-test.png"
    console.log("click")
};