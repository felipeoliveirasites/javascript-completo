//switch case alternatica ao uso do if quando eu sei exatamente os casos que eu quero testar ou executar uma condiçao especial para uma avalicação
let colocacao=8

switch (colocacao){
    case 1:
        console.log("Primeiro Lugar")
        //posso ter vário comando aqui
        break
        
    case 2:
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Terceiro Lugar")
        break

    case 4: case 5: case 6:
        console.log("Premio de participação")
        break

    default:
        console.log("Não subiu ao podio")
        break
}

console.log("Oi")