// Criar uma Promise que só espera
// O objetivo é:
// criar uma função que retorna uma Promise,
// essa Promise espera X milissegundos,
// depois resolve com uma mensagem.

function esperar(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Esperei ${tempo}ms e finalizei com sucesso!`);
        }, tempo);
    });
};

esperar(2000).then(msg => console.log(msg));