var pessoa ={
    nome: "Eduardo",
    contato:{
        email: "eduardo.pereira@luizalabs.com",
        telefone: "(11) 5555-5555",
    },
    endereco:{
        rua: "xxxx",
        cidade: "são paulo",
        estado: "sp"
    }
}

var frutas = ['maçã','pera','uva','abacaxi']

var nome1 = pessoa.nome

var {nome, contato, endereco} = pessoa
var {email} = contato
var {cidade} = endereco


var {,,,f4} = frutas//variáveis de referência

console.log(nome, email, cidade,f4)