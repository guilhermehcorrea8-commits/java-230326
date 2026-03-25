// const pessoa = {
//     nome : "Guilherme",
//     idade : 18,
//     falar : function(){
//         console.log("Olá, Meu nome é " + this.nome + " Tenho " + this.idade + " de Idade")
//     },
// };

// pessoa.falar()

// /////////////////////////////////////////////// Atividade 1 ///////////////////////////////////////////////////
// //// 1.carro
// const carro = {
//   marca: "Toyota",
//   modelo: "Corolla",
//   ano: 2022,
// };

// console.log(carro.modelo);

// //// 2.aluno
// const aluno = {
//   nome: "Ana",
//   idade: 16,
// };

// aluno.idade = 17;

// console.log(aluno);

// //// 3.produto
// const produto = {
//   nome: "Notebook",
//   preco: 3500,
// };

// console.log(`O produto ${produto.nome} custa R$ ${produto.preco}`);

// //// 4.pessoa
// const pessoa = {
//   nome: "Carlos",
// };

// pessoa.idade = 20;

// console.log(pessoa);

// console.log(pessoa.nome);

// console.log(pessoa["idade"]);

// //// 5.pessoa2-dinamica
// const pessoa2 = {
//   nome: "Guilherme",
//   idade: 18,
//   falar: function () {
//     console.log(
//       "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos"
//     );
//   },
// };

// pessoa2.falar();

// /////////////////////////////////////////////// Atividade 2 ///////////////////////////////////////////////////

// //// 1.nome
// const pessoa = {
//     nome: "João",
//     idade: 18
// };

// console.log(pessoa.nome, pessoa.idade);

// //// 2.carro
// const carro = {
//     marca: "Ford",
//     modelo: "Ka",
//     ano: 2015
// };

// console.log(`Carro: ${carro.marca} ${carro.modelo} - ${carro.ano}`);


// //// 3.objeto
// const produto = {
//     nome: "Camiseta",
//     preco: 50
// };

// produto.preco = 80;

// //// 4.aluno
// const aluno = {
//     nome: "Maria"
// };

// aluno.nota = 9;

// // 5.notacao
// console.log(aluno.nome);
// console.log(aluno["nota"]);

// //// 6.fakar
// const pessoa2 = {
//     falar: function() {
//         console.log("Olá!");
//     }
// };

// pessoa2.falar();

// //// 7.this
// const pessoa3 = {
//     nome: "João",
//     falar: function() {
//         console.log("Meu nome é " + this.nome);
//     }
// };

// pessoa3.falar();

// //// 8.desconto
// const produto2 = {
//     nome: "Celular",
//     preco: 1000,
//     desconto: function(porcentagem) {
//         this.preco -= this.preco * (porcentagem / 100);
//     }
// };

// produto2.desconto(10);
// console.log(produto2.preco);

// //// 9.notas
// const aluno2 = {
//     nome: "Lucas",
//     notas: [7, 8, 9]
// };

// console.log(aluno2.notas);

// //// 10.for
// for (let chave in aluno2) {
//     console.log(chave, aluno2[chave]);
// }

// //// 11.media
// const aluno3 = {
//     nome: "Ana",
//     notas: [8, 9, 10],
//     media: function() {
//         let soma = this.notas.reduce((a, b) => a + b, 0);
//         return soma / this.notas.length;
//     }
// };

// console.log(aluno3.media());

// //// 12.aprovados
// const alunos = [
//     { nome: "A", nota: 8 },
//     { nome: "B", nota: 5 },
//     { nome: "C", nota: 7 }
// ];

// const aprovados = alunos.filter(a => a.nota >= 7);
// console.log(aprovados);

// //// 13.banco
// const contaBancaria = {
//     saldo: 1000,
//     depositar(valor) {
//         this.saldo += valor;
//     },
//     sacar(valor) {
//         this.saldo -= valor;
//     }
// };

// //// 14.usuario
// const usuario = {
//     nome: "Pedro",
//     logado: false,
//     login() {
//         this.logado = true;
//     },
//     logout() {
//         this.logado = false;
//     }
// };

// //// 15.objeto dentro de objeto
// const pessoa4 = {
//     nome: "Carlos",
//     endereco: {
//         cidade: "Porto Alegre",
//         estado: "RS"
//     }
// };

// console.log(pessoa4.endereco.cidade);

// //// 16.filto
// const produtos = [
//     { nome: "TV", preco: 200 },
//     { nome: "Mouse", preco: 50 }
// ];

// const caros = produtos.filter(p => p.preco > 100);
// console.log(caros);

// //// 17.sistema usuario
// const sistema = {
//     usuarios: [],

//     adicionarUsuario(nome) {
//         if (!this.usuarios.includes(nome)) {
//             this.usuarios.push(nome);
//         }
//     },

//     listarUsuarios() {
//         console.log(this.usuarios);
//     }
// };

// //// 18.carrinho
// const carrinho = {
//     produtos: [],

//     adicionar(produto) {
//         this.produtos.push(produto);
//     },

//     remover(nome) {
//         this.produtos = this.produtos.filter(p => p.nome !== nome);
//     },

//     total() {
//         return this.produtos.reduce((soma, p) => soma + p.preco, 0);
//     }
// };

// //// 19.sistema notas
// const escola = {
//     alunos: [],

//     adicionar(nome, notas) {
//         this.alunos.push({ nome, notas });
//     },

//     media(aluno) {
//         let soma = aluno.notas.reduce((a, b) => a + b, 0);
//         return soma / aluno.notas.length;
//     },

//     aprovados() {
//         return this.alunos.filter(a => this.media(a) >= 7);
//     }
// };

// //// 20.mini banco
// const banco = {
//     contas: [],

//     criarConta(nome, saldo) {
//         this.contas.push({ nome, saldo });
//     },

//     transferir(de, para, valor) {
//         const origem = this.contas.find(c => c.nome === de);
//         const destino = this.contas.find(c => c.nome === para);

//         if (origem && destino && origem.saldo >= valor) {
//             origem.saldo -= valor;
//             destino.saldo += valor;
//         }
//     }
// };