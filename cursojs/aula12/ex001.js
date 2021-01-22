var hora = new Date()

var horario = hora.getHours();

console.log(`agora sao ${horario}`)

if ((horario > 12)&&(horario<18)) {
    console.log("BOA TARDE")
    
}else if((horario >=18)||(horario < 5)){
    console.log('BOA NOITEE')
}else{
    console.log("BOM DIAA")
}