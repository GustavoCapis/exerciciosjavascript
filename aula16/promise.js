//Criação de promise
// const myPromise = new Promise((resolve, reject) => {
//   const nome = "Gustavo";

//   if (nome === "Gustavo") {
//     resolve("Úsuário Gustavo encontrado!");
//   } else {
//     reject("O usuário Gustavo não foi encontrado!");
//   }
// });

// myPromise.then((data) => {
//   console.log(data);
// });

// //Encadeamento de then's
// const myPromise2 = new Promise((resolve, reject) => {
//   const nome = "Gustavo";

//   if (nome === "Gustavo") {
//     resolve("Úsuário Gustavo encontrado!");
//   } else {
//     reject("O usuário Gustavo não foi encontrado!");
//   }
// });

// myPromise2
//   .then((data) => {
//     return data.toLowerCase();
//   })
//   .then((stringModificada) => {
//     console.log(stringModificada);
//   });

//Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Giordano";

  if (nome === "Gustavo") {
    resolve("Úsuário Gustavo encontrado!");
  } else {
    reject("O usuário Gustavo não foi encontrado!");
  }
});

myPromise3.then((data) => {
  console.log(data);
}).catch( err => {
    console.log('Aconteceu um erro: ' + err)
});

//Resolver várias promessas - VER DEPOIS METODO ALL E RACE

//Fetch request na API do GitHub
//Fetch





//-----------------------------------------------------------------------------------------
function funcaoDemorada() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("teamo");
    }, 2000);
  });
}

function exemplo() {
  const promise = funcaoDemorada();
  console.log("oi antes de executar a promise");
  promise.then((resultado) => {
    console.log("oi dentro do callback");
    console.log("resultado:", resultado);
  });
}

function exemploSimplificado() {
  console.log("oi antes de executar a promise");
  funcaoDemorada().then((resultado) => {
    console.log("oi dentro do callback");
    console.log("resultado:", resultado);
  });
}

const exemploAsync = async () => {
  const resultado = await funcaoDemorada();
  console.log("resultadoAsync: ", resultado);
};
