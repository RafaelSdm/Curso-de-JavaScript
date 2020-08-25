function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById("res")

    if(ini.value.length==0 || fim.value.length ==0 || passo.value.length ==0){
        res.innerHTML = "esta faltando algo!\n verifique novamente"
    }else{
        res.innerHTML = "Contando...: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <=0){
            window.alert("inpossivel pular assim, ira ser considerado o passo igual a 0")
            p = 1
        }
        if(i<f){
            for(let c = i;c<=f; c = c+p){
                res.innerHTML += `${c} \u{1F573} `
            }
        }else{
            for(let c = i; c >=f; c = c -p){
                res.innerHTML += `${c} \u{1F573}`
            }
        }
        res.innerHTML += `\u{1F91A}`
    }
}