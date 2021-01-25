let numero = document.getElementById('txtnumero')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let array = []



function numeroTrue(n){
    if (Number(n)>=1 && Number(n) <=100) {

        return true
        
    }else{
        return false
    }

}

function numeroList(x,y){

    if(y.indexOf(Number(x)) != -1){
        return true
    }else{
        return false
    }

}



function adicionar(){

    if (numeroTrue(numero.value) && !numeroList(numero.value, array)) {
        array.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        list.appendChild(item)
        res.innerHTML = '';
        
    }else{
        window.alert('numero nao informado ou esta sendo repetido!')
    }

    numero.value = ''
    numero.focus(   )

}

function finalizar(){

    if(array.length==0){
        window.alert('Dê valores acima')
    }else{
        res.innerHTML = ''
        let total = array.length

        res.innerHTML += `<p>Voce informou ${total} numeros</p>`

        let maior = array[0]
        let menor = array[0]
        let soma =0;
        for(var i=0;i<total;i++){
            if(array[i]>maior){
                maior = array[i]
                //res.innerHTML += `<p>O maior numero do vetor é o ${}`
            }else if(array[i]< menor){
                menor = array[i]
            }
        }

        res.innerHTML += `<p>O maior numero do vetor é o ${maior}</p:`
        res.innerHTML += `<p>O menor numero do vetor é o ${menor}<p>`


        for(i=0;i<total;i++){
            soma = soma + array[i]
        }

        res.innerHTML += `<p>A soma dos vetores sao de ${soma}</p>`
        res.innerHTML += `<p>A media dos valores sao de ${soma/total}</p>`
        
    }

}