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

