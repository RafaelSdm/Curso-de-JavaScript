function contando(){
    var inic = window.document.getElementById('txtnumero')
    var fim = window.document.getElementById('txtfim')
    var pulo = window.document.getElementById('txtpasso')
    var resposta = window.document.getElementById( 'resposta')

    if(inic.value.length == 0 || fim.value.length ==0 || pulo.value.length ==0){
        window.alert('Algo de errado nao esta certo')
    }else{

           resposta.innerHTML = ''
            var i = Number(inic.value)
            var f = Number(fim.value)
            var p = Number(pulo.value)

            for(var c = i;c<=f;c= c+p){
                resposta.innerHTML += ` ${c} -> `
            }

            
            resposta.innerHTML += 'FIM'
        
    }
}