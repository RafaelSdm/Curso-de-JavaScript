// funcoes constrtoras - encapsulamento

class Produto {

}

const produto = new Produto()

const Hotel = function(){
    this.nome = "hotel do Rafael"
    this.suites = 34
    let ocupadas = 9


    this.reservar = function(){

        if(ocupadas <= this.suites){
            ocupadas++;
            console.log(`Suites ocupadas: ${ocupadas}`)
        }else{
            console.log("estamos lotados ")
        }
    }
}

const hotel = new Hotel();


hotel.reservar()


console.log(typeof Hotel)
console.log(typeof produto)