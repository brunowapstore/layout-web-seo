function gerarCodigoFonte(){
    const form = document.querySelector('.form');
    let botao = form.querySelector('#btn-reset');

    
    function recebeEventoForm(evento){
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiar código-fonte`;
        
        //Selecionando os componentes do html

        //pegando os valores do titulo
        const tituloGeral = form.querySelector('#tituloGeral').value;
        const imagemTituloDesktop = form.querySelector('#imagemTituloDesktop').value;
        const imagemTituloMobile = form.querySelector('#imagemTituloMobile').value;
        const altImagemTituloDesktop = form.querySelector('#altImagemTituloDesktop').value
        const altImagemTituloMobile = form.querySelector('#altImagemTituloMobile').value;
        const textoTitulo = form.querySelector('#textoTitulo').value;        

        //pegando valores do primeiro bloco
        const tituloPrimeiroBloco = form.querySelector('#tituloPrimeiroBloco').value;
        const imagemPrimeiroBloco = form.querySelector('#imagemPrimeiroBloco').value;
        const altImagemPrimeiroBloco = form.querySelector('#altImagemPrimeiroBloco').value;
        const textoPrimeiroBloco = form.querySelector('#textoPrimeiroBloco').value;
        
        //pegando valores do segundo bloco
        const tituloSegundoBloco = form.querySelector('#tituloSegundoBloco').value;
        const imagemSegundoBloco = form.querySelector('#imagemSegundoBloco').value;
        const altImagemSegundoBloco = form.querySelector('#altImagemSegundoBloco').value;
        const textoSegundoBloco = form.querySelector('#textoSegundoBloco').value;
        
        //pegando valores do terceiro bloco
        const tituloTerceiroBloco = form.querySelector('#tituloTerceiroBloco').value;
        const imagemTerceiroBloco = form.querySelector('#imagemTerceiroBloco').value;
        const altImagemTerceiroBloco = form.querySelector('#altImagemTerceiroBloco').value;
        const textoTerceiroBloco = form.querySelector('#textoTerceiroBloco').value;
        
        //pegando valores do quarto bloco
        const tituloQuartoBloco = form.querySelector('#tituloQuartoBloco').value;
        const imagemQuartoBloco = form.querySelector('#imagemQuartoBloco').value;
        const altImagemQuartoBloco = form.querySelector('#altImagemQuartoBloco').value;
        const textoQuartoBloco = form.querySelector('#textoQuartoBloco').value;        
        
        //Inserindo o código-fonte na variável codigoFonte e já adionando os valores das variáveis
        let codigoFonte = `<div class="containerDescLonga">
        <div class="imgBannerPrincipal show-for-medium"><img src="${imagemTituloDesktop}" alt="${altImagemTituloDesktop}" /></div>
        <div class="imgBannerPrincipal hide-for-medium"><img src="${imagemTituloMobile}" alt="${altImagemTituloMobile}" /></div>
        <span class="t2 conteudoTopo">${textoTitulo}</span>
        <h2 class="t1-titulo">${tituloGeral}</h2>
        <div class="containerDescLonga-conteudo">
        <div class="row flex-container align-middle containerItens">
        <div class="small-12 medium-7 columns">
        <h2 class="t1">${tituloPrimeiroBloco}</h2>
        <span class="t2">${textoPrimeiroBloco}</span></div>
        <div class="small-12 medium-5 columns flex-container align-right">
        <div class="containerImg"><img src="${imagemPrimeiroBloco}" alt="${altImagemPrimeiroBloco}" /></div>
        </div>
        </div>
        <div class="row flex-container align-middle containerItens">
        <div class="small-12 medium-5 columns flex-container align-left">
        <div class="containerImg"><img src="${imagemSegundoBloco}" alt="${altImagemSegundoBloco}" /></div>
        </div>
        <div class="small-12 medium-7 columns">
        <h2 class="t1">${tituloSegundoBloco}</h2>
        <span class="t2">${textoSegundoBloco}</span></div>
        </div>
        <div class="row flex-container align-middle containerItens">
        <div class="small-12 medium-7 columns">
        <h2 class="t1">${tituloTerceiroBloco}</h2>
        <span class="t2">${textoTerceiroBloco}</span></div>
        <div class="small-12 medium-5 columns flex-container align-right">
        <div class="containerImg"><img src="${imagemTerceiroBloco}" alt="${altImagemTerceiroBloco}" /></div>
        </div>
        </div>
        <div class="row flex-container align-middle containerItens">
        <div class="small-12 medium-5 columns flex-container align-left">
        <div class="containerImg"><img src="${imagemQuartoBloco}" alt="${altImagemQuartoBloco}" /></div>
        </div>
        <div class="small-12 medium-7 columns">
        <h2 class="t1">${tituloQuartoBloco}</h2>
        <span class="t2">${textoQuartoBloco}</span></div>
        </div>
        </div>
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