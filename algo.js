
const prompt = require('prompt-sync')();

let user = [
    {
        nome: 'PK',
        idade: 21,
        casado: false, 
        conjuge: null
    },
    {
        nome: 'higor',
        idade: 18,
        casado: false, 
        conjuge: null
    }
     
]

    user.forEach((u) => {
        let resposta = prompt(`${u.nome} é casado?: True/False: `).toLowerCase();
        u.casado = resposta === 'true'

    if(u.casado){
        u.conjuge = 'dona bonita'
    }
    })

    

   console.log(user, u.casado)