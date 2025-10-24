// 2) A fim de revisar assuntos de lógica de programação e praticar a sintaxe básica do JavaScript,
// implemente as soluções para os seguintes problemas, utilizando a linguagem JavaScript:

// a) Escreva um programa que leia um valor em R$ (reais) e a cotação atual do dólar americano,
// após isso, converta o valor de entrada para US$ (dólar americano) e exiba o resultado.


let reais = 10
let dolar = 5.38
let converter = reais / dolar

console.log("valor em dolares: ", converter.toFixed(2))


// b) Escreva um programa que calcule o perímetro (circunferência) de um círculo a partir do valor
// do raio.

let raio = 10;
let perimetro = 2 * Math.PI * raio;

console.log("perimetro do circulo: ",perimetro.toFixed(2))


// c) Escreva um programa para calcular a nota final de um aluno de curso de graduação do IFCE,
// sabendo que o semestre letivo é dividido em 2 etapas (N1 e N2) e a nota final é obtida a partir
// de uma média ponderada das notas obtidas nas 2 etapas. Os pesos para cada etapa são os
// seguintes: N1, peso 2; N2, peso 3. O programa deve solicitar ao aluno as notas de cada etapa
// e, ao final, o programa deve exibir uma mensagem informando qual a sua nota final e se ele
// está aprovado ou reprovado, sabendo que a nota mínima para aprovação é 7,0.

let n1 = 10;
let n2 = 10;

let media = (n1 * 2 + n2 * 3)/5;

console.log("sua media final é: ", media.toFixed(2))



// d) Dados n números inteiros positivos, calcule e exiba a soma dos que são primos.

let n = [3, 4, 5, 6, 500, 124]

function somaPrimos(lista){
    function primo(numero){
        if (numero < 2 ) return false;

        for ( let i = 2; i < numero; i++){
            if (numero %2 === 0) return false
        }
        return true;
    }

    return lista
        .filter(primo)
        .reduce((soma, numero)=> soma + numero, 0);
}

console.log("soma dos numeros primos: ",somaPrimos(n))

// 3) Ainda revisando assuntos de lógica de programação, mas avançando com a utilização de
// estruturas de dados e funções no JavaScript, resolva os seguintes problemas:

// a) Escreva uma função que receba dois números e um caractere como argumentos. O
// caractere recebido informa que tipo de operação deve ser realizada. Por exemplo, ao receber
// o caractere “+”, a função deve calcular a soma dos números passados como argumento e
// retornar o resultado. Use “+” para soma, “-” para subtração, “/” para divisão e “*” para
// multiplicação.

function calculadora(n1, n2, opera){
    if (opera == "+") return console.log("resultado da operacao:",n1 + n2);
    else if (opera == "-") return console.log("resultado da operacao:",n1 - n2);
    else if (opera == "*") return console.log("resultado da operacao:",n1 * n2);
    else if (opera == "/") return console.log("resultado da operacao:",n1 / n2);
    else return "operacao invalida";
}
console.log(calculadora(5, 5, "+"));


// b) Escreva uma função que receba uma quantidade não específica (aleatória) de números
// como argumentos e retorne o produtório dos números passados.

function produtorio(...numeros) {
  let produto = 1;
  for (let n of numeros) {
    produto *= n;
  }
  return produto;
}

console.log(produtorio(2, 3, 4)); 




// c) Implemente uma função que receba um número e retorne seu fatorial. Use recursividade.

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5));


// d) Implemente uma função que receba um array de números e retorne um outro array contendo
// somente os números ímpares encontrados.

function filtrarImpares(array) {
  let impares = [];
  for (let n of array) {
    if (n % 2 !== 0) impares.push(n);
  }
  return impares;
}

console.log(filtrarImpares([1, 2, 3, 4, 5, 6])); 


// e) Suponha que você está implementando um sistema de e-commerce e precise calcular o
// valor total de um produto no carrinho do cliente, aplicando ou não um desconto. Nesse
// contexto, escreva uma função que receba o valor unitário do produto, a quantidade
// solicitada e o desconto a ser aplicado e retorne o valor total da compra. Ao chamar a função,
// podemos passar ou não o desconto a ser aplicado. Caso nenhum valor de desconto seja
// passado, o padrão deve ser 0 (sem desconto).

function calcularTotal(valorUnitario, quantidade, desconto = 0) {
  let total = valorUnitario * quantidade;
  total -= total * (desconto / 100);
  return total;
}

console.log(calcularTotal(100, 2, 10)); 
console.log(calcularTotal(100, 2));     


// f) Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da
// conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método
// depositar, deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o
// valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve
// exibir uma mensagem informando ao usuário o seu saldo atual.

const contaBancaria = {
  numero: "12345-6",
  saldo: 1000,

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
  },

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  },

  informarSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
};


contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.informarSaldo();
