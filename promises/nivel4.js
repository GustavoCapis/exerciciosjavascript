// O Restaurante Assíncrono do Chef Asynchronous”

// Você vai simular um restaurante onde três pedidos diferentes são preparados ao mesmo tempo.

// Cada pedido é uma função que retorna uma Promise que demora um tempo diferente para “ficar pronta”.

// 🍔 Tarefas obrigatórias

// Crie três funções:

// fazerHamburguer()
function fazerHamburguer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hambúrguer pronto!");
    }, 2500);
  });
}
// fritarBatata()
function fritarBatata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Batata frita pronta!");
    }, 2000);
  });
}

// fazerMilkshake()
function fazerMilkshake() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Milkshake pronto!");
    }, 1000);
  });
}

//Crie uma função async chamada prepararPedido() para usar o Promise.all()

async function prepararPedido() {
  const res = await Promise.all([
    fazerHamburguer(),
    fritarBatata(),
    fazerMilkshake(),
  ]);
  console.log(res);
}

prepararPedido();
