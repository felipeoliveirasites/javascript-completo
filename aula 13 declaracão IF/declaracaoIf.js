let num= 49.9
let energia = 50
let clima= "sol"
clima = "chuva"
clima = "sol"

//if (teste lógico) {

//}

if(num > 10) {
        console.log("Numeral maior que 10")
    console.log("comando 2") // se tiver só um comando não só obrigado a colocar chaves no pyton ele consideraria pela indentação os dois comandos sem chaves
    // O escopo do programa é delimitado pelas chaves

    // Aninhas Ifs
    if (num >= 50) {
        console.log("Numeral maior ou igual a 50")
    } else 
        console.log("Numeral menor que 50")
    

} else if (num = 5){
    console.log("Numeral esta entre 6 e 10")
   
} else {
    console.log("Numeral menor ou igual a 5")
}

console.log("Fim do programa")

if (energia > 70 && clima == "sol") {
    console.log("Vou a praia")
} else if (energia > 50){
    console.log("Vou ao cinema")
} else {
    console.log("Vou ficar em casa")
}

