function limpar(){
    $('#nr_1').val('');
    $('#nr_2').val('');
    $('#nr_1').focus();
}

function somar(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(nr_1 + nr_2);
    limpar()
}

function subtrair(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(nr_1 - nr_2);
    limpar()
}

function multiplicar(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(nr_1 * nr_2);
    limpar()
}

function dividir(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(nr_1 / nr_2);
    limpar()
}

function potencia(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(nr_1 ** nr_2);
    limpar()
}
function raiz(){
    var nr_1 = parseFloat($('#nr_1').val());
    var nr_2 = parseFloat($('#nr_2').val());

    $('#resultado').val(Math.sqrt(nr_1));
}