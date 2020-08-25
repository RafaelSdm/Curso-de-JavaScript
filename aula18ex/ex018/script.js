let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n) <=100){
        return true
    }else{
        return false
    }3

}
function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert("valor informado invalido!")
    }

    num.value = " "
    num.focus()

}

function finalizar(){
    if(valores.length ==0){
        window.alert("informe pelo menos um numero!")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media =0

        for(let i in valores){
            if(valores[i]> maior){
                maior = valores[i]
            }else if(valores[i]< menor){
                menor = valores[i]
            }
            soma = soma + valores[i]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> no total temos ${tot} valores dentro do vetor`
        res.innerHTML += `o maior valor informado foi o ${maior} e o menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p> a soma de todos os valores do vetor foi de ${soma}</p>`
        res.innerHTML += `<p> a media do vetor é de ${media}</p>`

    }
}