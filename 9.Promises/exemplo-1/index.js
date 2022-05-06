const executarCronometro = (segundos) =>{
    return new Promise ((resolve, reject) => {

        if(segundos === null){
            return reject();
        }
        segundos = segundos * 1000;
        setTimeout(resolve,segundos);
    });
};

//EXECUÇÃO

executarCronometro(2)
    .then(function() {
        console.log("Os 2 segundos acabaram");

        console.log("Não esperei os 2 segundos para aparecer :) ");

        executarCronometro(null)
        .then(
            function() {
                console.log("Os 2 segundos acabaram");
            },
            function() {
                console.log("Erro ao executar");
            }
        );    

    }); 

