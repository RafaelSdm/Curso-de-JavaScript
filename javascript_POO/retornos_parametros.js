// metodos - parametros e retornos

class Usuario{
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotal = 0
    }

    logar(){

        let emailbd = "123@gmail.com"
        let senhabd = "1234"

        if(senhabd == this.senha){
            console.log("senha valida")

        }else{
            console.log("senha invaldia")
        }
    }

    calcularDesconto(cupom){

        let desconto = 0

        if(cupom == "desc20"){

            desconto =20

        }else if(cupom == "fest10"){
            desconto = 10

        }

        let total = this.subtotal - this.desconto


        return total;

    }
}

const ususario = new Usuario()

ususario.email = "123@gmil.com"
ususario.senha = "12234"
ususario.subtotal = 250


ususario.logar()

console.log(ususario.calcularDesconto("fest10"))

