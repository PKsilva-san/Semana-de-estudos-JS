
const prompt = require('prompt-sync')();

let user = []
let continuar = true
   let cUsuario = () => {
    let nome = prompt('digite seu nome: ')
    let idade = Number(prompt('digite sua idade: '))
    let  casado = prompt('Você é casado? yes/no: ').toLowerCase();
    let conjuge
    if(casado === 'yes'|| casado === 'y'){
        conjuge = prompt('Digite o nome do conjuge: ')
    }else{
        conjuge = 'Sem Conjuge'
    }

        let usuarios = {nome, idade, casado, conjuge}
        user.push(usuarios)
        
        
    }
    let buscarUser = () =>{
        let busca = prompt('Deseja fazer a busca de um usuario? se sim, digete o nome do usuario:  ').toLowerCase();
        let achei = user.find(u =>(u.nome.toLowerCase() === busca.toLowerCase()))
        if(achei){
            console.log(`Nome: ${achei.nome}\n Idade: ${achei.idade}\n Casado: ${achei.casado}\n Nome: ${achei.conjuge}`)
        }else{
            console.log('User não enconstrado')
        }
    }

    let listaUser = () =>{
        user.forEach(u =>{
            console.log(`Nome: ${u.nome}\n Idade: ${u.idade}\n Casado: ${u.casado}\n Nome: ${u.conjuge}`)
        })
    }

    do{
        cUsuario();

        

        let loop = prompt('deseja cadastrar outro usuario?: yes/no: ').toLowerCase();
        if(loop != 'yes' && loop != 'y'){
            continuar = false
        }
    }while(continuar)
   
    let lista = true

    while(lista){
        let loop = prompt('Deseja mostrar uma lista dos usuario? yes/no: ')
        if(loop === 'yes' || loop === 'y'){
            lista = false
            listaUser();
            
        }else{
            lista = false
        }
    }

    buscarUser();

    

  