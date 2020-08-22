var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao ${hora}hrs`)
if(hora >=6 && hora <=12){
    console.log("bommm diaaaa")

}else if (hora < 18 && hora > 12){
    console.log("boaaa tardeeeee")
}else if (hora  < 24 && hora > 18){
    console.log("boaaa noitteeee")
}else if (hora<6){
    console.log("boaaa maddugadaaa")
}