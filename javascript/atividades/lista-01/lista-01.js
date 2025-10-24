// 2) A fim de revisar assuntos de lógica de programação e praticar a sintaxe básica do JavaScript,
// implemente as soluções para os seguintes problemas, utilizando a linguagem JavaScript:

// a) Escreva um programa que leia um valor em R$ (reais) e a cotação atual do dólar americano,
// após isso, converta o valor de entrada para US$ (dólar americano) e exiba o resultado.


let reais = 5
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