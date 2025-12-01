//Criar uma função que recebe parâmetros e dependendo do resultado vai pro resolve ou pro reject

function prometa(a, b) {
  const soma = a + b;
  //abaixo criamos a promise padrão
  return new Promise((resolve, reject) => {
    if (soma > 3) {
      resolve("Deu certo!"); //Aqui é o resultado caso tenha sido um sucesso
    } else {
      reject("Erro."); //Aqui é o resultado caso tenha sido um fracasso
    };
  });
};

prometa(1, 5)
  .then((msg) => console.log(msg)) //o parâmetro do then sempre vai pegar o valor que foi declarado no resolve
  .catch((msg) => console.log(msg));//o parâmetro do catch sempre vai pegar o valor que foi declarado no reject
