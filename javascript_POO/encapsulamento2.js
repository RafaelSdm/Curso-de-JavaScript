// encapsulamento,modificadores de acesso e getters e setter


class ContaBancaria{
    constructor(){

        // provate, protected e public
        this._numeroConta = 0
        this._saldo = 0
    }

    sacar(valorSaque){

        this._saldo = this._saldo - valorSaque

    }


    depositar(valorDeposito){

        this._saldo = this._saldo + valorDeposito

    }


    get saldoConta(){
        return this._saldo
    }

    set saldoConta(novoSaldo){
        if(novoSaldo > 0){
            this._saldo = novoSaldo
        }

    }

    get numeroConta(){
        return `numero : ${this._numeroConta}`
    }

    set numeroConta(numero){
        if(numero > 0){

            this._numeroConta = numero

        }


    }
}

const conta = new ContaBancaria()

conta.numeroConta = 50

conta.saldoConta = 2000

conta.sacar(20)
conta.depositar(500)

console.log(conta.saldoConta)

console.log(conta.saldoConta)

console.log(conta.saldoConta)

console.log(conta.numeroConta)
