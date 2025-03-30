const prompt = require('prompt-sync')();

let food = ['Maçã', 'Banana', 'Laranja']
let carrinho = []
let continuar = true

let nItem = Number(prompt('Quantas coisas voce quer adicionar a lista?: '))

let n2 = 0

let addItem = () =>{

    let item = prompt('digite o que deseja adicionar: ')
    let itens = item

    food.push(itens)

    
}


    
    

    while(n2 < nItem){
       
        addItem();
        n2++
    }
    for(i in food){
        console.log(`${i}. ${food[i]}`)
    }





let addCarrinho = () =>{

    let adicionar = Number(prompt('Digite o numero correspondente ao produto que voce quer: '))
    if(adicionar >= 0 && adicionar < food.length){
        carrinho.push(food[adicionar])
        
    }else{
        console.log('Item não encontrado ou numero invalido')
    }
}

    while(continuar){
        addCarrinho();
        let loop = prompt('deseja inserir mais algum item a lista? yes/no: ').toLowerCase();
        if(loop !== 'yes'){
            continuar = false

            let confirm = prompt('Deseja confirmar a compra? yes/no: ').toLowerCase();
            if(confirm === 'yes'){
                if(carrinho.length === 0){
                    console.log('Carrinho Vazio!')
                }else{
                    for(let item of carrinho){
                        console.log(item)
                    }
                }
            }else{
                console.log('A operação foi cancelada!')
                
            }
        }
       
    }


   


