// modelo, entidade, identidade, caract. e acoes


class Carro {
    constructor(){
        this.marca = "ford",
        this.model0 = "fordcar",
        this.cor = "preto",
        this.placa = "MGF-2334"


    }

    ligar(){

    }
}

const carro = new Carro();
 carro.model0 = "golf";

 console.log(carro.model0)


 // loja virtual

 class Produto {
     constructor(){
         // roupas

         this.tam = "G",
         this.corBlusa = "azul",
         this.preco = "34,56"

         // eletronicos

         this.altura = "50cm",
         this.largura = "30cm"
     }
 }