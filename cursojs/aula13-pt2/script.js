function analisar(){
    var data = new Date()
    var ano = data.getFullYear()

    var nascimento = window.document.getElementById('idade')
    var resposta = window.document.getElementById('res')

    if(nascimento.value.length ==0 || nascimento.value >  ano){
        window.alert('Verifique os dados e tente novamente')    
    }else{
        var sex = window.document.getElementsByName('sexo')
        var idade  = ano - Number(nascimento.value)
       // resposta.innerHTML = `A sua idade é de aproximadamente ${idade}`

       var sexo = ''

       var img = window.document.createElement('img')
       img.setAttribute('id','foto')


       if(sex[0].checked){
           sexo = 'Homem';

            if((idade <10)&&(idade >=0)){
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if((idade >=10)&&(idade<18)){
                img.setAttribute('src','foto-jovem-m.png')
            }else if((idade >=18)&&(idade < 60)){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }



       }else if(sex[1].checked){
           sexo =  'Mulher'
           if((idade <10)&&(idade >=0)){
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if((idade >=10)&&(idade<18)){
            img.setAttribute('src','foto-jovem-f.png')
        }else if((idade >=18)&&(idade < 60)){
            img.setAttribute('src','foto-adulto-f.png')
        }else{
            img.setAttribute('src','foto-idoso-f.png')
        }

       }

       resposta.style.textAlign = 'center'
       resposta.innerHTML = `Sexo: ${sexo} idade: ${idade}</br>`
       resposta.appendChild(img)


    }
}