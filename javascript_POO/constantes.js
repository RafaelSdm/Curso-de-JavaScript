const produto = {
    nome: "notebook"

}



produto = {
    nome: "celular" 
}

Object.freeze(produto)



produto.nome = "celular"
console.log(produto.nome)
