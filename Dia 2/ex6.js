const prompt = require('prompt-sync')();


let usuarios = []
let continuar = true

const cadUsuario = () =>{
    let nome = prompt('Digite o nome do usuario: ')
    let idade = Number(prompt('Digite a idade do usuario: '))
    if(idade < 18){
        console.log('Não é possivel continuar cadastro pois usuario de menor')
        return cadUsuario();
        
    }
    let email = prompt('Digite o email do usuario: ')
    let usuario = {nome, idade, email}

    usuarios.push(usuario)
}


let listaUser = () =>{
usuarios.forEach(u =>{
    console.log(`User: ${u.nome}\n idade: ${u.idade}\n email: ${u.email}`)
})};

while(continuar){
    cadUsuario();
    let loop = prompt('Deseja cadastrar outro usuario? s/n: ').toLowerCase();
    if(loop !== 's'){
        continuar = false
    }
}

listaUser();
