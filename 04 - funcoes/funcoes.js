const prompt = require("prompt-sync")();

// function calcularImc(peso, altura) {
//   return peso / Math.pow(altura, 2);
// }
// let imc = calcularImc(80, 1.7);
// let classificacao = calcularImc(imc);
// console.log(classificacao);

// function classificarImc(imc) {
//   if (imc < 18.5) {
//     return "Abaixo do peso";
//   } else if (imc >= 18.5 && imc < 25) {
//     return "Peso normal";
//   } else if (imc >= 25 && imc < 30) {
//     return "Acima do peso";
//   } else if (imc >= 30 && imc < 40) {
//     return "Obeso";
//   } else {
//     return "Obesidade grave";
//   }
// }

// // MAIN

// let funcao = function () {
//   console.log("oi");
// };
// const soma = (a, b) => a + b;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

saudacao();

// Nome
let nome = prompt("Digite seu nome: ");
mostrarNome(nome);

// Soma
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
console.log("Soma:", soma(n1, n2));

// Dobro
let numDobro = Number(prompt("Digite um número para ver o dobro: "));
console.log("Dobro:", dobro(numDobro));

// Par ou ímpar
let numPar = Number(prompt("Digite um número: "));
console.log(parOuImpar(numPar));

// Maior número
let a = Number(prompt("Digite o primeiro número: "));
let b = Number(prompt("Digite o segundo número: "));
console.log("Maior:", maiorNumero(a, b));

// Média
let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));
let nota3 = Number(prompt("Nota 3: "));
console.log("Média:", media(nota1, nota2, nota3));

// Celsius → Fahrenheit
let temp = Number(prompt("Temperatura em Celsius: "));
console.log("Fahrenheit:", converterCelsius(temp));

// Contador
let cont = Number(prompt("Contar até: "));
contador(cont);

// Tabuada
let tab = Number(prompt("Número da tabuada: "));
tabuada(tab);

//Saudação
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

//Mostrar nome
function mostrarNome(nome) {
  console.log(`Olá, ${nome}`);
}

//Soma
function soma(a, b) {
  return a + b;
}

//Dobro
function dobro(numero) {
  return numero * 2;
}

//Par ou ímpar
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

//Maior número
function maiorNumero(a, b) {
  return a > b ? a : b;
}

//Média de 3 notas
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

//Converter Celsius para Fahrenheit
function converterCelsius(celsius) {
  return (celsius * 9) / 5 + 32;
}

//Contador
function contador(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

//Tabuada
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
