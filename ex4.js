 const prompt = require('prompt-sync')();


 let operacoes = {
     '+': (a,b) => a + b,
    '-': (a,b) => a - b,
     '*': (a,b) => a*b,
   '/': (a,b) =>( b !== 0? a/b : 'Operação invalida')
 };

let n1 = parseFloat(prompt('digite um numero: '))
 let operacao = prompt('digite um simbolo entre "+, -, *, /: "')
let n2 = parseFloat(prompt('digite outro numero: '))

 if(operacoes[operacao]){
    let resultado = operacoes[operacao](n1, n2)
    console.log(`Resultado é: ${resultado}`)
 }

// const prompt = require("prompt-sync")(); // Importa o prompt-sync

// // Definição das operações em um objeto
// const operacoes = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
//   "/": (a, b) => (b !== 0 ? a / b : "Erro: Divisão por zero!"),
//   "%": (a, b) => (b !== 0 ? a % b : "Erro: Divisão por zero!"),
//   "**": (a, b) => a ** b
// };

// // Função para validar entrada numérica
// function obterNumero(mensagem) {
//   let num;
//   do {
//     num = prompt(mensagem);
//     if (isNaN(num) || num.trim() === "") {
//       console.log("Entrada inválida! Digite um número válido.");
//     } else {
//       return parseFloat(num);
//     }
//   } while (true);
// }

// // Loop principal
// while (true) {
//   console.clear();
//   console.log("🔥 CALCULADORA TURBINADA 🔥\n");

//   let num1 = obterNumero("Digite o primeiro número: ");
//   let operacao = prompt("Escolha a operação (+, -, *, /, %, **): ");
//   let num2 = obterNumero("Digite o segundo número: ");

//   if (operacoes[operacao]) {
//     let resultado = operacoes[operacao](num1, num2);
//     console.log(`\n🧮 ${num1} ${operacao} ${num2} = ${resultado}\n`);
//   } else {
//     console.log("\n❌ Operação inválida!\n");
//   }

//   // Pergunta se o usuário quer continuar
//   let continuar = prompt("Deseja fazer outra operação? (s/n): ").toLowerCase();
//   if (continuar !== "s") {
//     console.log("\n👋 Obrigado por usar a calculadora! Até mais!\n");
//     break;
//   }
// }
