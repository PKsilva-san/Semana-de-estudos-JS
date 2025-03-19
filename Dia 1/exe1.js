let user = [
    {
        nome: 'PK',
        idade: 21,
        casado: true, 
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
    if(u.casado === true){
        u.conjuge = 'dona bonita'
    }
  })

   console.log(user)