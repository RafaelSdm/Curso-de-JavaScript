function verificar() {
    

    var dados = window.document.getElementById('txtdados')
    var res = document.getElementById('res')

    var dados1 = window.document.getElementById('txtdados1')
    
    var imagem = window.document.createElement('img')
    imagem.setAttribute('id','foto')

    if(dados.value == 3 || dados.value == 4 && dados1.value == 1 || dados1.value ==5){
        res.style.textAlign = 'center'
        res.innerHTML = '<br><h2>Voce é um desenvolveodr backend, parabens</h2>' 
        imagem.setAttribute('src','back.png ')
        imagem.style.width = '500px'
        imagem.style.length = '600px'
        
        res.appendChild(imagem)

    }else if(dados.value == 1 && dados1.value == 3){
        res.style.textAlign = 'center'
        res.innerHTML = '<br><h2>Voce pode futuramente ser um dev fullstack</h2>'
        imagem.setAttribute('src','full.jpeg')
        imagem.style.width = '500px'
        imagem.style.length = '600px'

        res.appendChild(imagem)


    }else if(dados.value ==1 || dados.value ==2 && dados1.value ==2 || dados1.value == 3 || dados1.value ==4){
        res.style.textAlign = 'center'
        res.innerHTML = "<br><h2>Voce é um desenvolvedor frontEnd</h2>"
        imagem.setAttribute('src','front.jpg')
        imagem.style.width = '500px'
        imagem.style.length = '600px'

        res.appendChild(imagem)

    }else{
        window.alert('Algo de errado nao esta certo')
    }

}