function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    msg.innerHTML = `Agora sao ${hora}: ${minutos} horas`
    if(hora >= 0 && hora< 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = "green"
    }else if( hora >=12 && hora < 18){
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        // boa noite
        img.src = 'noite.png'
        document.body.style.background ="blue "
    }

}
