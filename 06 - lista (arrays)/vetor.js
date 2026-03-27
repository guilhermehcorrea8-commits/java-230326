const prompt = require("prompt-sync")();

// let nota = [];
// nota.push(5);
// nota.push(10);
// let soma = 0;
// for (let i = 0; i < nota.length; i++) {
//   soma += nota[i];
// }
// let media = soma / nota.length;

// let frutas = ["Maça", "Banana", "Abacaxi"]
// let idades = [19, 50, 14, 25]
// let presenca = [true, false, true, false]
// let pessoa = [
//     {nome:"Eduardo" ,idade: 20},
//     {nome:"Felipe" ,idade: 20},
//     {nome:"Ivne" ,idade: 20},
//     {nome:"Pietro" ,idade: 20},
// ]
// frutas.push("Ameixa") // adiciona um elemento na ultima posição do vetro
// console.log(frutas)
// frutas.pop() // remove ultimo elemento no vetor
// frutas.shift()// remove primeiro elemento no vetor
// frutas.unshift("Banana")// adiciona elemento no primeiro indice do vetor

// let pessoas = {
//     nome:"diogo",
//     idade :19,
//     carro:"Ford-Fox"
// };
// for(let chave in pessoa)
// {
//     console.log(chave);
//     console.log(pessoa[chave])
//     console.log(`em Detaque ${pessoa.chave.nome}`)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1-Tabuada

// let numero = Number(prompt("Digite um número: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 2-numeros Pares
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         console.log(numeros[i]);
//     }
// }

// 3-Nomes Letra V
// let nomes = ["Victor", "Ana", "Vanessa", "Carlos", "Vitor"];

// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i].startsWith("V")) {
//         console.log(nomes[i]);
//     }
// }

// 4-pares 10 a 50
// let pares = [];

// for (let i = 10; i <= 50; i++) {
//     if (i % 2 === 0) {
//         pares.push(i);
//     }
// }

// console.log(pares);

// 5-media aluno
// let medias = [2, 7, 3, 8, 10, 4];

// for (let i = 0; i < medias.length; i++) {
//     if (medias[i] < 5) {
//         console.log(medias[i]);
//     }
// }

// 6-Maior Nota
// let notas = [2, 7, 3, 8, 10, 4];
// let maior = notas[0];

// for (let i = 1; i < notas.length; i++) {
//     if (notas[i] > maior) {
//         maior = notas[i];
//     }
// }

// console.log("Maior nota:", maior);