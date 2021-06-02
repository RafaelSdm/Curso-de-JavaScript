// herança - reutilização e manutencao

// classe: cao passaro




class Animal { // superclasse

    constructor(pcor, ptamanho, ppeso){
      
        this.cor = pcor
        this.tamanho = ptamanho
        this.peso =  ppeso
    }

    correr(){
        console.log("correr")
        console.log("como")
        console.log("um")
    }

    dormir(){
        console.log("dormir")
    }

}



class Cao extends Animal{ // subclasse
    

    constructor(pcor, ptamanho, ppeso, porelha){
        super(pcor, ptamanho, ppeso)
        
        this.tamanhoOrelha = porelha
    }

    correr(){
        super.correr()
        console.log("cao")
        
    }


    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal{

    constructor(pcor, ptamanho, ppeso){
        super(pcor, ptamanho, ppeso)
      

    }
    

    voar(){
        console.log("voar")
    }

    correr(){
        super.correr()
        console.log("passaro")
    }
}

class Papagaio extends Passaro {
    constructor(pcor, ptamanho, peso, pfalar){
        super(pcor, ptamanho, peso)
        this.sabeFalar = pfalar
    }
    
    falar(){
        console.log("falar")
    }
}


//instancia 

/*

const cao = new Cao()
const passaro = new Passaro()
const papagaio = new Papagaio()

*/


/*

cao.correr()
passaro.correr()
passaro.cor = "Amarelo"
console.log(passaro.cor)

*/


/*
papagaio.correr()
papagaio.voar()
papagaio.falar()

console.log(cao.tamanhoOrelha)

cao.correr()
passaro.correr()

*/

/*

const animal = new Animal("azul", 12, 70);

console.log(animal.cor)

*/

/*
const cao = new Cao("rosa", 40, 40, 4)

console.log(cao.cor)

*/

const papagaio = new Papagaio("red", 20, 1, true)
console.log(papagaio.sabeFalar)

