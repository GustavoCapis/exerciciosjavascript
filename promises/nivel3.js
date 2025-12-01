//Transformar o exercício nível 2 em async/await

function prometa(a, b) {
  const soma = a + b;
  return new Promise((resolve, reject) => {
    if (soma > 3) {
      resolve("Deu certo!");
    } else {
      reject("Erro.");
    }
  });
};

// prometa(1, 5)
//   .then((msg) => console.log(msg))
//   .catch((msg) => console.log(msg));

async function testarprometa(a, b) {
  try {
    const res = await prometa(a, b);
    console.log(`Then via await: ${res}`);
  } catch (err) {
    console.log(`Catch via await: ${err}`);
  };
};

testarprometa(2,2);

