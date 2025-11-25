// Crie uma caixa de comentários:
// usuário digita
// clica em "Enviar"
// aparece o comentário embaixo
// cada comentário tem botão “Apagar”
// atualizar o contador quando adicionar ou remover comentários

const sendButton = document.querySelector("#sendBtn");
const comment = document.querySelector("#commentInput");
const commentaryDiv = document.querySelector("#commentsList");
const emptyMessage = document.querySelector("#emptyMsg");

sendButton.onclick = () => {
    //cria o elemento p na div para cada comentário
    const commentary = document.createElement("p");
    //adiciona a classe pra cada comentário
    commentary.classList.add("comment")
    //faz com que o conteúdo da msg seja o que foi digitado na caixa de texto
    commentary.textContent = comment.value;
    //cria o botão pra apagar comentário
    const deleteCommentBtn = document.createElement("button");
    //cria uma classe pro botão apagar
    deleteCommentBtn.classList.add("btn-delete");
    //Texto que aparece no botão
    deleteCommentBtn.textContent = "Apagar";
    //faz o comentário aparecer na div agregando como um parágrafo
    commentaryDiv.append(commentary);
    //Agrega o botão de apagar do lado do comentário
    commentary.append(deleteCommentBtn);
    //apaga a mensagem que fica quando não tem nenhum comentário
    emptyMessage.remove();

    //função para apagar o comentário 
    deleteCommentBtn.onclick = () => {
        commentary.remove();
        incrementCounter();
    };

    incrementCounter();
    console.log("click");
};


function incrementCounter() {
    const counter = document.querySelector("#count");
    const comments = document.querySelectorAll(".comment");
    const quantity = comments.length;

    counter.textContent = `${quantity} comentário${quantity !== 1 ? "s" : ""}`;
};

//TODO: refatorar esse código!