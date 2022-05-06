function consumirApi() {

    let opts = {//aray
        method : 'GET',//definindo um parâmetro GET
        headers: {} //headers vazio, só pra constar
    };
  
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados',opts)
    .then(function (response) {//retorne o response do link do IBGE em formato de json
        return response.json();
    })
    .then(function(response) {//response da linha 10 (response da api do ibge transformada em json)

        document.getElementById("listaEstados").innerHTML = "";//cria um elemento chamado lista estados -> resetando ele com ""

        for (let index in response){//forEach(percorrendo o array todo)
            
            let uf = response[index]; //dando um index-laço pra cada elemento correpondente

            var paragrafo = document.createElement('p'); //dando um parágrafo pra cada volta
            var texto = document.createTextNode(`${uf.id} -${uf.sigla} - ${uf.nome}`);//criando uma listinha no formato passado
            paragrafo.appendChild(texto);//cada paragrafo sera adicionado à cada volta da listinha texto


            document.getElementById("listaEstados").appendChild(paragrafo);//cada id da lista estados é add no html(com paragrafo)
        }
    })    

}