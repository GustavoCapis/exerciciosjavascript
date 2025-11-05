const estoque = {
    mouse: 15,
    teclado: 8,
    monitor: 3,
    webcam: 20
};

// USANDO for in:
// Mostre apenas os produtos com menos de 10 unidades
// Resultado: "teclado: 8", "monitor: 3"
let MenosdeDez = ""
for (let chave in estoque){
    if (estoque[chave] < 10){ 
        MenosdeDez += (MenosdeDez ? ", " : "") + `${chave}: ${estoque[chave]}`; //Essa ? é operador ternário para if em que: condição ? true : false
    }
}
console.log(MenosdeDez)