//Escreva uma condição em que o usuário seja permitido dirigir;
//Escreva uma condição em que o usuário possa realizar uma tarefa se ele quiser ou se alguém permitir;
//Escreva uma condição em que o usuário escolha a roupa que irá utilizar em várias situações climáticas

var idade = 18;
console.log(idade>=18? 'pode dirigir': 'não pode dirigir')

//-----------------------------------------------------------------------------------------------------//

var quer = true
var permitir = false 

console.log(quer ? 'eu quero' : permitir ? 'eu quero' : 'eu não quero')
console.log(quer || permitir ? 'eu quero' : 'eu não quero')

var condicaoClimatica = 'não sei'

console.log(condicaoClimatica === 'sol' ? 'usar bermuda' : condicaoClimatica === 'chuva' ? 'usar calça':'usar vestido')
