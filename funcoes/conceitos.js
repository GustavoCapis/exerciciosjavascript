//Void functions
//São funções que não retornam nada
//Ex:
function digaMeuNome(){
    const nome = "Gustavo";
    console.log(nome);
};
digaMeuNome();

//Funções com parâmetros
//Parâmetros são como variáveis que sao declaradas dentro do () para armazenar algo
//Ex:
function soma(num1, num2){
    let resultado = num1 + num2;
    console.log(resultado);
};
soma(2,2);

//Função return
//Retornam um valor ao final da função q fica armazenado e pode ser usado depois
//Ex:

function estaEndividado(receita, gastos){
    if (receita > gastos){
        return "Não está endividado!";
    } else {
        return "Está endividado!";
    }
};

const maria = estaEndividado(3000, 5000);
const joao = estaEndividado(5000, 3500);
console.log(maria);
console.log(joao);

//Arrow functions 
//Uma forma mais enxuta de escrever funções normalmente anônimas que substitui a palavra-chave function por =>
//Ex:
const digaMeuNome2 = (nome) => {
    return nome;
};
console.log(digaMeuNome2("Gustavo"));

//Bônus!! 
//Transformando a função com if usando operador ternário
function estaEndividado(receita, gastos){
    return receita > gastos ? "Não está individado!" : "Está endividado!";
};