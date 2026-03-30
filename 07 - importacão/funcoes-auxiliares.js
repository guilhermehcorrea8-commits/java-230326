// function calcularMedia(aluno) {
//   let soma = 0;
//   for (let i = 0; i < aluno.notas.length; i++) {
//     soma += notas[i];
//   }
//   let media = soma / notas.length;
//   return media;
// }

// function classificar(media) {
//   if (media >= 7) {
//     return "Aprovado";
//   } else if (media >= 5) {
//     return "Recuperação";
//   } else {
//     return "Reprovado";
//   }
// }
// export {classificar, calcularMedia};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function tabuada(numero) {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  return resultado;
}

export { tabuada };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MaiorMenor(numeros) {
  let maior = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }

    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return { maior, menor };
}

export { MaiorMenor };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filtrarPares(Numeros){
    let pares = [];

    for(let l = 1; l < Numeros.length; l++){
        if(Numeros[l] % 2 === 0){
            pares.push(Numeros[l])
        }
    }
    return pares;
}

export {filtrarPares}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
