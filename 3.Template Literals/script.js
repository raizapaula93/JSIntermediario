var nome = 'Eduardo'
var doce = 'chocolate'

console.log(`Olá ${nome}, você gosta de ${doce}?`)

//1.Escreva uma função que contenha seu nome, sua idade, e sua atividade favorita
let raiza = (name,age,hobbie) => `Olá me chamo ${name}, tenho ${age} anos e adoro ${hobbie}.`;

console.log(raiza('Raiza',29,'andar de bibicleta'))

//correção 1
 var nome ='Raiza'
 var idade = 29
 var atividade = ['programar','viajar']
 var atividade2 ={
     dia:30,
     horario: '8:00'
 }

//Faça a correção da expressão a seguir para que imprima a idade e o doce favorito.
`eu tenho ${`${idade}` anos} e gosto muito de `${chocolate}`//frase para corrigir`

console.log(`Olá, meu nome é ${nome}, eu tenho ${idade}anos, e gosto muito de ${atividade}, no dia ${atividade2.dia}`)

//Correção
console.log(`eu tenho ${idade} anos e gosto muito de ${chocolate}`)//frase para corrigir