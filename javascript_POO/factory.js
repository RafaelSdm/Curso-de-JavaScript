// factory - design pattern ( padrao de design ou padrao de projetos)

// padrao de projetos -> forma comum de resolver problemas

const produto1 = {
    nome: "notebbok",
    preco: 1200
}

const produto2 = {
    nome: "notebok",
    preco: 1200
}

const produtoFactory = function(nome, preco){

    // dados de uma API




    return{
        nome, 
        preco,

        recuperarAvaliacoes(){

            console.log(`Avaliações para ${this.nome}`)

        }
    }
}

const produto = produtoFactory("notebbok",1220)
produto.recuperarAvaliacoes()