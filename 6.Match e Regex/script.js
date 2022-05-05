var placa = 'FJQ-5837';

console.log(placa.match(/^[A-Z]{3}\-\d{4}$/gmi))

//começa e termina sempre com uma "/"
//ela possui um conjunto de  de instruções
// ela possui flags G -> Global / M -> Multiline /I -> Insisitive

const reg1 = /^[A-Z]{3}\-\d{4}$/gmi // placa do carro ->o regex funciona similar à uma "tipagem"
const reg2 = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/gmi //data valida só o fomato msm
const reg3 = /^[a-zA-Z]+\s[a-zA-z]+$/gmi// Nome completo com apenas 1 espaço (Nome e Sobrenome)
const reg4 = /^\d{3}\.d{3}\.d{3}\/[0-1]{4}\-\d{2}/gmi //CPF
const reg5 = /^\d{2}\.d{3}\.d{3}\/[0-1]{4}\-\d{2}/gmi //CNPJ
const reg6 = /^[0]\d{3,5}$/ //agencia 
const reg7 = /^\d{3,5}\-\w/gmi //conta bancária