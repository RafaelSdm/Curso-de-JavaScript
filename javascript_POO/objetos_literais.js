// objetos literais - melhorias


/*

let nome = "Notebook"
let preco = 1200

const produto = {
    nome: nome,
    preco: preco,
    exibirproduto : function(){
        console.log(`${this.nome} , ${this.preco}, ${this.categoria}`)
    }
}


const pro = produto

pro.preco = 2000

console.log(pro.preco)
console.log(produto.preco)

*/



/*
produto.categoria = "eletronicos"



produto.nome = "celular"

console.log(produto.nome)

produto.exibirPreco = function() {

    console.log(`Preço: ${this.preco}`)

}


produto.exibirPreco()
//produto.exibirproduto()

*/

class Produto{
    constructor(){
        this.nome = "23"
        this.preco = 0
    }
}

const produto = new Produto()

const pro = produto
pro.preco = 2000

console.log(pro.preco)