//toda a sintaxe (document.querySelector ou document.getElementById ou addEventListen no java, aqui são utilizadas
 //na sintaxe do JQuery)


$(document).ready(function() {                                                                              //linkando ou recuperando o documento html
    $('header button').click(function() {                                                                   //quando o evento click for acionado pelo botão no header
        $('form').slideDown();                                                                              //o formulário é exibido de cima para baixo como um slide
    })

    $('#btn-cancelar').on('click', function() {                                                             //quando o evento click for acionado pelo botão no header
        $('form').slideUp();                                                                                //o formulário é recuado de baixo para cima como um slide
    })

    $('form').on('submit', function(e) {                                                                    //quando for acionado o botão do formulário
        e.preventDefault();                                                                                 //eliminando o evento padrão quando acionado um botão.
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()                                       //criando uma constante com o link informado (val = value)
        const novoItem = $('<li style="display:none"</li>');                                                //criando uma tag li na constante porém não visivel (display:none)
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);                                      //criando uma imagem (appendTo -> adicionar dentro da tag li)
        $(`                                                                                                 
            <div class="overlay-imagem-link">                                         
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>                                                                                        
            </div>
        `).appendTo(novoItem);                  //criando uma div class com o texto e link para o tamanho real da imagem e adicionando à lista
        $(novoItem).appendTo('ul');             //adicionando a tag li na tag ul
        $(novoItem).fadeIn(1000);               //efeito de apaecer lentamente em milisegundos
        $('#endereco-imagem-nova').val('');     //limpando o campo input

    })
})
