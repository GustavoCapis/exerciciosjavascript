//Crie um botão que remove TODAS as imagens da página.

const button = document.querySelector("#button");

const imagens =  document.querySelectorAll(".images");
button.onclick = () => {
    imagens.forEach(image => {
        image.remove();
    });
};