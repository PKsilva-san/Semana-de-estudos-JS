const prompt = require('prompt-sync')();

let num = []
let add = () => {
    let addnum = Number(prompt('digite um numero: '))
    
   
    num.push(addnum)
}


for(let i = 1; i <= 3; i++){
    add();
}
    let pares = num.filter(par => par %2 == 0)

    let dobro = num.map(valor => valor - 2)

    console.log(pares)
    console.log(dobro)
    






