const prompt = require("prompt-sync")();
// let nome = prompt('digite seu nome:');
// console.log(`Olá ${nome}`);

let operador = prompt('insira um operador entre "+, -, /, *": ')
if(operador != '+' && operador != '-' && operador != '/' && operador != '*'){
    console.log('tu fez cagada...')
    return
}
let n1 = parseFloat( prompt('digite um numero: ')) 
let n2 = parseFloat(prompt('digite outro numero: '))
let result


if(operador === '+'){
    result = n1 + n2
}else if(operador === '-'){
    result = n1 - n2
}else if( operador === '/'){
    result = n1 / n2
}else{
    result = n1 * n2
}

console.log(`O resultado entre ${n1} ${operador} ${n2} = ${result}`)

