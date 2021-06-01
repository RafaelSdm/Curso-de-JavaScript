const hotel = {
    quartos1: 20,
    ocupados:10,
    piscinas:2,

    verificar_Disponibilidade1: function(){
       let resposta =  this.quartos1 - this.ocupados;
       console.log(`Disponíveis: ${resposta}`)
    }
}

hotel.quartos1 = 25;

hotel['quartos1'] = 30

console.log(hotel.quartos1)

delete hotel.piscinas

console.log(hotel.piscinas)


// anotações de construtor

const hot = new Object()
hot.q = 403
hot.oc = 233
hot.verificar = function(){

    let r = this.q - this.oc 
    return `Disponivel ${r}`

}

console.log(hot.oc)

// criando classes

class H{
    constructor(){
        this.qu = 46
        this.ocu = 100
    }

    verificacao(){
        let resp = this.ocu - this.qu;
        return `Disponivel : ${resp}` 
    }
}

const ht = new H()
ht.verificacao()
console.log(ht.verificacao())