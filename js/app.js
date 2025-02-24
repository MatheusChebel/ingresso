function comprarIngresso(){
    tipoIngresso = document.getElementById('tipo-ingresso').value;
    quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    
    if(quantidadeIngresso < 0 ){
        alert("Quantidade inválida");
    }else if (tipoIngresso.includes("Pista")){
        comprarPista(quantidadeIngresso);
    }else if (tipoIngresso.includes("Cadeira Superior")){
        comprarSuperior(quantidadeIngresso);
    }else if(tipoIngresso.includes("Cadeira Inferior")){
        comprarInferior(quantidadeIngresso);
    }
}


function comprarPista(quantidadeIngresso ){
    let qtdIngressoPista  = parseInt(document.getElementById('qtd-pista').textContent);
        if (qtdIngressoPista === 0){
        alert("Ingressos para Pista Esgotados");
        return
            }else if(quantidadeIngresso > qtdIngressoPista){
                alert("Quantidade Indisponível para Pista");
                return
                }else{
                    qtdIngressoPista = qtdIngressoPista - quantidadeIngresso;
                    document.getElementById('qtd-pista').textContent = qtdIngressoPista;
                    alert('Compra Realizada com sucesso');
                }
}

function comprarSuperior(quantidadeIngresso ){
    let qtdIngressoCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdIngressoCadeiraSuperior === 0){
        alert("Ingressos para Cadeira Superior Esgotados");
        return
    }else if(quantidadeIngresso > qtdIngressoCadeiraSuperior){
        alert("Quantidade Indisponível para Cadeira Superior");
        return
        }else{
            qtdIngressoCadeiraSuperior = qtdIngressoCadeiraSuperior - quantidadeIngresso;
            document.getElementById('qtd-superior').textContent = qtdIngressoCadeiraSuperior;
            alert('Compra Realizada com sucesso');
        }
}

function comprarInferior(quantidadeIngresso ){
    let qtdIngressoCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdIngressoCadeiraInferior === 0){
        alert("Ingressos para Cadeira Inferior Esgotados");
        return
    }else if(quantidadeIngresso > qtdIngressoCadeiraInferior){
        alert("Quantidade Indisponível para Cadeira Inferior");
        return
        }else{
            qtdIngressoCadeiraInferior = qtdIngressoCadeiraInferior - quantidadeIngresso;
            document.getElementById('qtd-inferior').textContent = qtdIngressoCadeiraInferior;
            alert('Compra Realizada com sucesso');
        }
}
