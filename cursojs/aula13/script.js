function carregando(){

    var txt = window.document.getElementById('texto')
    var img = window.document.getElementById('imagens')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    //var hora = 19

    txt.innerHTML = `Agora são ${hora}:${min}:${sec}`

    if((hora <=12)&&(hora >=5)){
        // Horario da manha
        img.src ='manha.png'
        document.body.style.background = 'orange'
    }else if((hora > 12)&&(hora<=18)){
        //horario da tarde
        img.src = 'tarde.png'
        
        document.body.style.background = 'yellow'
       
    }else{
        //horario da noite
        img.src = 'noite.png'

        document.body.style.background = 'blue'
    }
}
