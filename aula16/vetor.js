let vetor=[1,3,5,6,7,8,3,2]

for(let i=0;i < vetor.length;i++){
    console.log(`o vetor da ${i+1}° posição é o ${vetor[i]}`)
}
console.log("------------------------------------")

for(let j in vetor){
    console.log(`o vetor da posiçao ${j} tem o valor de ${vetor[j]}`)
}