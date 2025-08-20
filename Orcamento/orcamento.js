var total = 0.00;

function adicionarItem(){
    //pegar os valores digitados pelo usuario
    let item =  $('#item').val();
    let valor = parseFloat($('#valor').val());

    //validar dados digitados
    if(item == ''/*ou (!item)*/ ){
        alert('Você não digitou o item, AÍ FICA DIFÍCIL FILHO');
        $('#item').focus();
        return;
    }
    if(!valor /* Se estiver em formato numero funciona apenas desse jeito */){
        alert('Você não digitou o valor do Item, TÁ TIRANDO FILHO?? (BOTA AE)');
        $('#valor').focus();
        return;
    }

    //adicionar a TR na tabela com os dados digitados pelo usuário
    let novaLinhaTabela = `
        <tr>
            <td>
                ${item}
            </td>
            <td class="text-right">
                R$ ${valor.toFixed(2).replace('.',',')}
            </td>
            <td class="text-center"><button class="btn btn-sm btn-danger" onclick="removerItem(this, ${valor})">X</button></td>
        </tr>
    `;

    $('#tabela').append(novaLinhaTabela);

    //limpar os dados na tela para recebe um novo item
    $('#item').val('');
    $('#valor').val('');
    $('#item').focus();
    
    //Guardar somatório totalizador
    total = total + valor;

    //atualizar na tela o valor total do orçamento
    $('#total').val(total.toFixed(2).replace('.', ','));

}

function imprimir(){
    window.print();
}

function removerItem(botao, valor){
    $(botao).closest('tr').remove();
    total = total - parseFloat(valor).toFixed(2);
    $('#total').val(total.toFixed(2)).replace('.', ',');
}