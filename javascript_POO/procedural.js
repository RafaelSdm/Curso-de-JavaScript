//paradigma = exemplo de padrao a ser seguido, noa se trata de uma linguagem, mas a forma como voce soluciona problemas usando uma linguagem de programação


// javascript é uma linguagem multi paradigma


// procedural


function verificar_Disponibilidade(q, o){
    let res = q -o;

    console.log(`Disponiveis: ${res}`)
}


let quartos = 50;

let ocupados = 5


// orientado a objetos

const hotel = {
    quartos1: 20,
    ocupados:10,

    verificar_Disponibilidade1: function(){
       let resposta =  this.quartos1 - this.ocupados;
       console.log(`Disponíveis: ${resposta}`)
    }
}

hotel.ocupados = 3;
hotel.verificar_Disponibilidade1()
