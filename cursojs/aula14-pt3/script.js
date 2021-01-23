function tabuada(){
    var numero = window.document.getElementById('txtnumero')
    var tab = window.document.getElementById('tabuada')

    if(numero.value.length ==0){
        window.alert('Insira dados no formulario')
    }else{
        tab.innerHTML = '';
        var n = Number(numero.value)
        var contador = 0;

        while(contador<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            tab.appendChild(item)
            contador++
        }
    }
}