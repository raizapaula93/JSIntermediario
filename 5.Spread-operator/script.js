//Objeto
var pessoa ={
    nome: "Eduardo",
    idade: 29,
    sexo: "Masculino",  
    contato:{
        email: "eduardo.pereira@luizalabs.com",
        telefone: "(11) 5555-5555",
    },
    estado: "SP",
    profissao: "Desenvolvedor",
    empresa: "Magalu"
    
}


//spread-operator -> uma cópia do objeto
//eu altero o objeto cópia, não o objeto original
var alterarPessoa = {
    //...pessoa, msm q não traga diretamente, se eu referenciar ele traz as informações
    nome: "Eduardo Pereira", 
    contato:{
        ...pessoa.contato,
        telefone: "(13) 5555-5555"
    },
    cidade: "São Paulo"
 }
//objeto original, nó dentro do objeto obj original, referência ao obj original com o nó pra amnter intacto, atr q eu quero alterar
//Tudo que estiver no alterarPessoa(alterado) ele vai alterar no pessoa(tipo uma feature separada e depois colada)
var returnPessoa = {...pessoa, ...alterarPessoa}//junção do pessoa com o alterarPessoa.oq esta depois é a última informação

//console.log(pessoa,alterarPessoa)
///--------------------------------------------------Exercícios----------------------------------------------------------------------
//1. escreva um objeto e faça uma cópia dele
//2. altere a chave desse objeto criado no exercício anterior
//3. escreva seu nome e o separe usando a sintaxe do spread operator em um array

var pessoa1 ={
    nome: "Raiza",
    idade: 29,
    sexo: "Feminino",  
    contato:{
        email: "raizapaula93@gmail.com",
        telefone: "(11) 5555-5555",
    },
    estado: "SP",
    profissao: "Desenvolvedora",
    empresa: "Vida"
    
}

var alterarPessoa1 = {
    ...pessoa1, // msm q não traga diretamente, se eu referenciar ele traz as informações
    nome: "Raiza de Paula", 
    contato:{
        ...pessoa1.contato,
        telefone: "(21) 5555-5555"
    },
    cidade: "São Paulo"
 }

 var nome = pessoa1.nome

 var spreadArray = [...alterarPessoa1.empresa ]//por mais que o atr empresa n esteja em alterar pessoa, ele tá herdando do pessoa 1(consigo mexer em atrs de forma indireta)

 console.log(alterarPessoa1, spreadArray)//imprimindo a cópia e separando a string em várias letras