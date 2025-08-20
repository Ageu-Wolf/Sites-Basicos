function imc(){
    var peso = parseFloat($('#peso').val());
    var altura = parseFloat($('#altura').val());

    imc = peso/ (altura*altura);

    $('#imc').val(imc.toFixed(2));
     
    resultado()
    limpar()
}

function resultado(){
    if(imc < 18.5){
        resposta = 'abaixo do peso';
    }else if(imc> 18.5 && imc<=24.9){
        resposta = 'peso normal';
    }else if(imc >= 25 && imc <= 29.9){
        resposta = 'Pré-Obesidade';
    }else if(imc >= 30 && imc <= 34.9){
        resposta = 'Obesidade Grau 1';
    }else if(imc >= 35 && imc <= 39.9){
        resposta = 'Obesidade Grau 2';
    }else{
        resposta = 'Obesidade Grau 3';
    }

    $('#resposta').val(resposta);
}

function limpar(){
    $('#peso').val('');
    $('#altura').val('');
    $('#peso').focus();
}