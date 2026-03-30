// // const {classificar, calcularMedia } = require("./funcoes-auxiliares")

// import { classificar } from "./funcoes-auxiliares.js";


// console.log(classificar(10));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { tabuada } from "./funcoes-auxiliares.js";

// const numero = 4;

// console.log(tabuada(numero))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { MaiorMenor } from "./funcoes-auxiliares.js";

// const numeros = [100, 150, 90, 200, 9000]

// let resultados = MaiorMenor(numeros);

// console.log("Maior Número:", resultados.maior);
// console.log("Menor Número:", resultados.menor);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { filtrarPares } from "./funcoes-auxiliares.js";

const Numeros = [1, 30, 28, 6, 7, 3, 9 , 10, 12]

const Pares = filtrarPares(Numeros);

console.log("Números Pares:", Pares.join (", "));