function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngresso = parseInt(document.getElementById('qtd').value);

    if(tipoDeIngresso == 'pista'){
        comprarPista(quantidadeDeIngresso);
    }
    if(tipoDeIngresso == 'superior'){
        comprarSuperior(quantidadeDeIngresso);
    }
    if(tipoDeIngresso == 'inferior'){
        comprarInferior(quantidadeDeIngresso);
    }
    document.getElementById('qtd').value = '';
}

function comprarPista(quantidadeDeIngresso){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidadeDeIngresso > qtdPista){
        alert('Quantidade indispónivel para o tipo pista');
    }
    else{
        qtdPista = qtdPista - quantidadeDeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
}
function comprarSuperior(quantidadeDeIngresso){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidadeDeIngresso > qtdSuperior){
        alert('Quantidade indispónivel para o tipo superior');
    }
    else{
        qtdSuperior = qtdSuperior - quantidadeDeIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}
function comprarInferior(quantidadeDeIngresso){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidadeDeIngresso > qtdInferior){
        alert('Quantidade indispónivel para o tipo inferior');
    }
    else{
        qtdInferior = qtdInferior - quantidadeDeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}