/* Operador spread */

let n1=[11,10,20,30]
let n2=[11,22,33,44,55]
/* let n3=n1 */
/* let n3=[n1, n2] */
/* let n3=[...n1] */
let n3=[...n1,...n2]

const jogador1 = {nome:"Bruno", energia:100, vidas:3, magia:50}
const jogador2 = {nome:"Bruce", energia:100, vidas:5, velocidade:80}
const jogador3 = {...jogador1, ...jogador2}
/* const jogador3 = {jogador1, jogador2} */
const soma=(v1,v2,v3)=>{
    return v1 + v2 + v3
}

function soma2(v1,v2,v3){
    return v1 + v2 + v3
}

console.log(soma2(1,5,4))

console.log(soma(1,5,4))


console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3 :" + n3)
console.log("tipo de n3: " + typeof(n3))
console.log(jogador3)

let valores = [1,5,4,10]

console.log(soma(...valores))
console.log(soma(valores)) /* Não funciona precisa usar Spread */

const obj1 =document.getElementsByTagName("div")
const obj2 =[...document.getElementsByTagName("div")]

/* Retorna coleção de elementos <> de Array envista dos elementos desta coleção 
Node não conhece o DOM 
HTML colection só tags, o array pode vairas coisas diferença de spread para sem apread*/

/* obj1.forEach(element => {
    console.log(element)
}); */ // aqui da erro pois forEach não é uma função do HTML colection



console.log(obj1)
console.log(obj2)

/* obj2.forEach(a => {
    console.log(element);
    let divteste = window.document.getElementById("teste")
    divteste.innerHTML += JSON.stringify(element)
});
 */

let divLimpa = false;

obj2.forEach(a => {
    
    console.log(a);
    let divteste = window.document.getElementById("teste")  
    
    let parametroAntigo = a.innerHTML
    divteste.innerHTML += "<br>" + a.innerHTML

  if (!divLimpa) {
    // Limpar div apenas na primeira iteração
    divteste.innerHTML = parametroAntigo 
    
    divLimpa = true;
  } 
    
});




