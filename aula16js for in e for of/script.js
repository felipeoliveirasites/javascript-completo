let num=[10,20,30,40,50]

console.log("Início")

for(let i=0; i<num.length; i++) {
    console.log(num[i])
    //do array num o elemento da posição i - dentro de num o elemento da posição do meu índice
    //imprimi a posição destes elementos dentro do array
}

// lenghth comprimento relacionado a quantidade de elementos que eu tenho dentro deste array

console.log("Fim")
console.log(num[2])
console.log(num.length)

for(n in num) {
    console.log(num[n])
    //para pegar a posição do elemento
    // aqui o n é o indíce da coleção 
    //da coleção num vou imprimir o elemento da posição n
}
    // n vai receber os elementos retornados da coleção que eu quero trabalhar

for(n of num) {
    console.log(n)
    //para pegar o elemento
    //aqui o n é o elemento desta coleção
    //dentro do elemnto da coleção que ele ta iterando
}

