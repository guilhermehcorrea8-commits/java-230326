const prompt = require("prompt-sync")();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nota1 = Number(prompt("entre com a 1ª Nota: "));

// let nota2 = Number(prompt("entre com a 2ª Nota: "));

// let nota3 = Number(prompt("entre com a 3ª Nota: "));

// let media = (nota1 + nota2 + nota3) / 3;

// console.log("Média: " + media.toFixed(2));

// if (media < 5) {
//     console.log(`Reprovado ${media}`);
// } else if (media >= 5 && media < 7) {
//     console.log(`Recuperação ${media}`);
// } else {
//     console.log(`Aprovado ${media}`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let peso = Number(prompt("Digite seu Peso (kg): "))
// let altura = Number(prompt("Digite seu Peso (m): "))

// let imc = peso / (altura * altura)

// console.log(`Seu imc é: ${imc.toFixed(2)}`)

// if (imc < 18.5) {
//     console.log("Abaixo do peso");
// } else if (imc >= 18.5 && imc < 25) {
//     console.log("Peso normal");
// } else if (imc >= 25 && imc < 30) {
//     console.log("Acima do peso");
// } else if (imc >= 30 && imc < 40) {
//     console.log("Obeso");
// } else {
//     console.log("Obesidade grave");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let preco = Number(prompt("Digite o preço do produto: "));
let codigo = Number(prompt(
`Escolha a forma de pagamento:
1 - Débito (10% desconto)
2 - Dinheiro ou PIX (15% desconto)
3 - 2x sem juros
4 - Acima de 2x (10% juros)
Digite o código: `
));

let valorFinal;

if (codigo === 1) {
    valorFinal = preco * 0.90;
} else if (codigo === 2) {
    valorFinal = preco * 0.85;
} else if (codigo === 3) {
    valorFinal = preco;
} else if (codigo === 4) {
    valorFinal = preco * 1.10;
} else {
    console.log("Código inválido!");
}

if (valorFinal !== undefined) {
    console.log(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////