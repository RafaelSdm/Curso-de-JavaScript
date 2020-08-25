function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length ==0 || Number(fAno.value) > ano){
        window.alert("verifique os dados informados novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <10){
                //bebe
                img.setAttribute('src','bebeM.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmasc.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src','adulto.png')
            }else{
                // idose
                img.setAttribute('src','idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src','bebef.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','jovemM.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src','adultaF.png')

            }else{
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos uma ser ${genero} com idade  de ${idade} anos`
        res.appendChild(img)

    }
}