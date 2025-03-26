const prompt = require("prompt-sync")();



let num1 = parseFloat(prompt('escolha um numero: '));
let operador = prompt('insira um operador entre "+, -, /, *": ')
let num2 = parseFloat(prompt('escolha outro numero: '));


if(operador != '+' && operador != '-' && operador != '/' && operador != '*'){
    console.log('tu fez cagada...')
    return
}

function operacao(num1, num2, operador){
    switch(operador){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num2 !== 0? num1/num2 : 'Não pode dividir por 0';
        case '*':
            return num1*num2;
        default:
            console.log('operação invalida')
    }
}
    let result = operacao(num1, num2, operador)
console.log(`Resultado é: ${result}`)