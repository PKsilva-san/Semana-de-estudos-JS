const prompt = require('prompt-sync')();

let alunos = []
let continuar = true

let cadAluno = () =>{

    let nome = prompt('digite o nome do aluno: ')
    let nota = Number(prompt('digite a nota do aluno: '))

    let aluno = {nome, nota}
    alunos.push(aluno)
    console.log('Aluno cadastrado')
    
}

let buscarAluno = () =>{
    let nomeBusca = prompt('Digite o nome do aluno para busca: ')
    let alunoEncontrado = alunos.find(a => a.nome.toLowerCase() === nomeBusca.toLowerCase())

    if(alunoEncontrado){
        console.log(`Nome: ${alunoEncontrado.nome}\n nota: ${alunoEncontrado.nota}`)
    }else{
        console.log('aluno não encontrado')
    }
}
    

    const lista = () =>{
        console.log(`\n lista de alunos`)

        alunos.forEach(a =>{
            console.log(`nome do aluno é: ${a.nome} \n e suas notas são: ${a.nota}`)
        })
    }

    while(continuar){
        cadAluno();

        let cont = prompt('deseja adicionar outro aluno? s/n: ').toLowerCase();
        if(cont !== 's'){
            continuar = false
            break;
        }

    }

    let verLista = prompt('Deseja ver uma lista dos alunos e suas notas? s/n: ').toLowerCase();
    if(verLista === 's'){
        lista();
    }

    let busca = prompt('voce deseja buscar algum aluno: s/n: ').toLowerCase();
    if(busca === 's'){
        buscarAluno();
    }




