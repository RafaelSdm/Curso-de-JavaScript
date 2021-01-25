function verificar(){
    let numero = window.document.getElementById('txtnumero')
    let escolha = window.document.getElementsByName('choice')
    let resp = window.document.getElementById('res')
    let tabuada = window.document.getElementById('tab')

    

    if(numero.value.length ==0){
        window.alert("informe os dados corretamente")
    }else {

        var num = Number(numero.value)
  

        

         if(escolha[0].checked){
            for(var i =0;i<=10;i++){
                var item = document.createElement('option')
                item.text = `${num} x ${i} = ${num*i}`
                tab.appendChild(item)
                
            }
        }else{
           for(i =0;i<=10;i++){
               var item = document.createElement('option')
               item.text = `${num} / ${i} = ${num/i}`
               tab.appendChild(item)
               
           }
        }


        

    }
    

    
}