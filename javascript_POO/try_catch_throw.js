// tratamento de erros com try catch

function contarLetras(produto){

    try {

        console.log(produto.nome.length)
        console.log('teste concluido')
        
    } catch(erro){
        console.log("erro ao processar")
        tratarErro(erro)
        

    } finally{
        console.log("Obrigado pelo teste! :)")
    }


    

}

function tratarErro(erro){

    throw new Error("Coigo de erro: 78787")

}

const produto = {
    ome:"Notebook",
    preco : 1200
}

contarLetras(produto)