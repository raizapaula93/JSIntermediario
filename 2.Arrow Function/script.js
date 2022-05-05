ARROW FUNCTION
const person = (firstName, lastName) => {
    const getfullName = () => {
        const fullName = `${firstName} ${lastName}`
        return fullName
    }
    return getfullName()
}

const imprimir = () => console.log(person('Eduardo','Pereira'))

imprimir()



 if(idade >=18){
       return 'Maior'
    } else {
       return 'Menor'
    
    }
TERNARIO
const person = (idade) => {
    const maior = idade >= 18? 'Maior':'Menor';
   
} 

console.log(person(19))

Colocar funções em um formato mais enxuto
 function funcao (param1,param2){
     return param1 + param2
 }

 var funcao = (param1,param2) => param1 + param2

//  function sum(number1,number2){
//      return number1+number2
//  }

//ARROW FUNCTION 1º DEFINE NOME DE VARIÁVEL

const sum = (number1,number2) =>{
    return number1+number2
}

//se a sua função tem somente um retorno, pode tirar as chaves e o return. se é só retornar pode passar direto o retorno ali
//qd vc tem uma operação dentro da arrow functio, tipodelcarar uma variável, aí coloca chave
//quandoa sua arrow function recebe apenas um parâmetro, vc pode passar sem os parênteses, e se só tem um return tb nao precisa das chaves
const sum1 = number1 => number1

 console.log(sum(2,2,))
 
 //escreva se o número é par ou ímpar

 let ParOuImpar = number => {
     if (number%2 !==0){
         return 'ìmpar'
     }   return 'par'    
 }

 console.log(ParOuImpar(7))

 var soma = (numberOne,number2) => numberOne + number2

 console.log(soma(4,4))

 var cumprimentar = nome => `Ola ${nome}`
