function gerarCodigoFonte(){
    const form = document.querySelector('.form');
    let botao = form.querySelector('#btn-reset');

    
    function recebeEventoForm(evento){
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiar código-fonte`;
        
        //Selecionando os componentes do html

        //pegando os valores do titulo
        const tituloGeral = form.querySelector('#tituloGeral').value;
        const imagemTitulo = form.querySelector('#imagemTitulo').value;
        const altImagemTitulo = form.querySelector('#altImagemTitulo').value

        //pegando valores do primeiro bloco
        const tituloPrimeiroBloco = form.querySelector('#tituloPrimeiroBloco').value;
        const imagemPrimeiroBloco = form.querySelector('#imagemPrimeiroBloco').value;
        const textoPrimeiroBloco = form.querySelector('#textoPrimeiroBloco').value;
        
        //pegando valores do segundo bloco
        const tituloSegundoBloco = form.querySelector('#tituloSegundoBloco').value;
        const imagemEsquerda = form.querySelector('#imagemEsquerda').value;
        const imagemDireita = form.querySelector('#imagemDireita').value;
        const textoSegundoBloco = form.querySelector('#textoSegundoBloco').value;
        
        //pegando valores do terceiro bloco
        const tituloTerceiroBloco = form.querySelector('#tituloTerceiroBloco').value;        
        const textoTerceiroBloco = form.querySelector('#textoTerceiroBloco').value;
        
        //pegando valores do quarto bloco
        const tituloQuartoBloco = form.querySelector('#tituloQuartoBloco').value;
        const ImagemQuartoBloco = form.querySelector('#ImagemQuartoBloco').value;
        const textoQuartoBloco = form.querySelector('#textoQuartoBloco').value;        

        //pegando valores do quinto bloco
        
        const textoRodape = form.querySelector('#textoRodape').value;
        
        //Inserindo o código-fonte na variável codigoFonte e já adionando os valores das variáveis
        let codigoFonte = `<div class="body">
        <section class="bg-blue header-section">
        <h2 class="header-text">${tituloGeral}</h2>
        <img class="img-header" src="${imagemTitulo}" alt="Ilha para congelados" /></section>
        <div class="invisible-holder">
        <section class="product-info-with-image">
        <div class="block-right"><img class="img-block" src="${imagemPrimeiroBloco}" alt="${altImagemTitulo}" /></div>
        <div class="block-left">
        <h3>${tituloPrimeiroBloco}</h3>
        <p>${textoPrimeiroBloco}</p>
        </div>
        </section>
        <div class="imgs-circle -right desktop-hide" style="background-image: url(\'${imagemEsquerda}\');"></div>
        <section class="comparison-block">
        <div class="bg-blue header-comparison">
        <h3 class="comparison-header-text">${tituloSegundoBloco}</h3>
        <p class="comparison-header-subtitle">${textoSegundoBloco}</p>
        </div>
        <div class="imgs-circle -right mobile-hide" style="background-image: url(\'${imagemEsquerda}\');"></div>
        <div class="imgs-circle -left" style="background-image: url(\'${imagemDireita}\');"></div>
        <div class="holder-main-comparison-text">
        <h3>${tituloTerceiroBloco}</h3>
        <p>${textoTerceiroBloco}</p>
        </div>
        </section>
        </div>
        <section class="product-info-with-image -alt">
        <div class="block-one">
        <h3>${tituloQuartoBloco}</h3>
        <p>${textoQuartoBloco}</p>
        </div>
        <div class="block-two" style="background-image: url(\'${ImagemQuartoBloco}\');"></div>
        </section>
        <section class="bg-blue footer-template">
        <p>${textoRodape}</p>
        </section>
        </div>`;

        //Definindo o valor da variável codigoFonte no elemento html textarea (adicionando o valor da variável na página)
        caixaDeTexto.innerHTML = codigoFonte;

        //Prevenir que a página recarregue quando o formulário for enviado
        evento.preventDefault();
    }

    //Escutando o evento de enviar o formumlário
    form.addEventListener('submit', recebeEventoForm);

    //Escutando o evento de resetar o formulário
    form.addEventListener('reset',copiarTexto);
    function copiarTexto(evento) {
       
        //Impedindo o formulário de recarregar
        evento.preventDefault();
        // pegando o elemento
        let copyText = document.getElementById("cod");
      
        // Selecionando todo o texto dentro do textarea
        copyText.select();
        copyText.setSelectionRange(0, 99999); //Se for mobile, isso vai ajudar
      
        //Copiando o conteúdo selecionado
        document.execCommand("copy");

        //Avisando que foi copiado
        //alert('Copiado!');

        //Limpando a caixa após copiar
        caixaDeTexto.innerHTML= "";
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiado!`;

      }
}
gerarCodigoFonte();

//vinculando um elemento html de id cod a uma variável chamada caixaDeTexto
let caixaDeTexto = document.getElementById('cod');