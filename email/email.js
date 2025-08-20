function enviar(){
    var email = document.getElementById('email');
    var assunto = document.getElementById('assunto');
    var texto = document.getElementById('texto');
    if(email.value == ''){
        alert('Ops! Digite um e-mail válido!');
        return;
    }

    if(assunto.value == ''){
        alert('Ops! Digite um assunto!');
        return;
    }

    if(texto.value == ''){
        alert('Ops! Digite um texto!');
        return;
    }
    alert('E-mail enviado com sucesso!');
}