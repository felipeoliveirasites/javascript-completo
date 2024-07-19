// Loop > Definido - For(sei a quantidade de vez que vou iterar um bloco de comando) ou > Indefinido - While ou Do while(quando não sei)

/* Loop for - 3 configurações: (inicialização ou contador; condição de execução; controle da minha variável da minha váriavel de controle ou contador ou incremento ou decremento) {
    se tiver um comando somente a chave não é obrigatória (a mesma condição do if)
}
*/

console.log("Início do programa")

for(let i=0; i < 10; i++) {
    //i=i+1 ou i++ ou i+=1 mesma coisa
    /* aumentando a cada iteração o i em 1 */
    console.log("CBF Cursosk - valor do i:" + i)
}

console.log("Fim do programa")

//enquanto a condição for verdadeira ela itera se for falsa ele sai e continua a execução do programa
//cuidade com o for para não entrar numa rotina de loop infinito - * true para sempre *

for(let i=0; i <= 100; i++) {
   if(/* i%2 == 0 */ !(i%2) ) {
    console.log(i + " é par")
   } else {
    console.log(i + " é ímpar")
   }
   
}

// 0: false e 1:true
