function gerarCodigoFonte(){
    const form = document.querySelector('.form');
    let botao = form.querySelector('#btn-reset');

    
    function recebeEventoForm(evento){
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiar código-fonte`;
        
        //Selecionando os componentes do html
        const svgMarca = form.querySelector('#svgMarca').value;

        //pegando valores do primeiro bloco
        const imagemPrimeiroBloco = form.querySelector('#imagemPrimeiroBloco').value;
        const tituloPrimeiroBloco = form.querySelector('#tituloPrimeiroBloco').value;
        const textoPrimeiroBloco = form.querySelector('#textoPrimeiroBloco').value;
        
        //pegando valores do segundo bloco
        const tituloSegundoBloco = form.querySelector('#tituloSegundoBloco').value;
        const textoSegundoBloco = form.querySelector('#textoSegundoBloco').value;
        const imagemSegundoBloco = form.querySelector('#imagemSegundoBloco').value;
        
        //pegando valores do terceiro bloco
        const imagemTerceiroBloco = form.querySelector('#imagemTerceiroBloco').value;
        const tituloTerceiroBloco = form.querySelector('#tituloTerceiroBloco').value;
        const textoTerceiroBloco = form.querySelector('#textoTerceiroBloco').value;
        
        //pegando valores do quarto bloco
        const tituloQuartoBloco = form.querySelector('#tituloQuartoBloco').value;
        const textoQuartoBloco = form.querySelector('#textoQuartoBloco').value;
        const ImagemQuartoBloco = form.querySelector('#ImagemQuartoBloco').value;

        //pegando valores do quinto bloco
        const ImagemQuintoBloco = form.querySelector('#ImagemQuintoBloco').value;
        const tituloQuintoBloco = form.querySelector('#tituloQuintoBloco').value;
        const textoQuintoBloco = form.querySelector('#textoQuintoBloco').value;
        
        //Inserindo o código-fonte na variável codigoFonte e já adionando os valores das variáveis
        let codigoFonte = `<section class="layoutPersonalizado-marcaGucci">
<section class="blueBg">
<div class="row expanded collapse">
<div class="columns small-12 ">
<div class="PositionRelativeLarge show-for-large">
<div class="bannerTopo-img">
<div class="bannerTopo-img-item"><img src="${imagemPrimeiroBloco}" alt="" /></div>
</div>
<div class="tituloGucci"><img src="${svgMarca}" alt="" />
<div class="bg01-txt-01 ">
<h2 class="gucci-titulos">${tituloPrimeiroBloco}</h2>
<p class="gucci-ps">${textoPrimeiroBloco}</p>
</div>
</div>
<div> </div>
</div>
<div class="PositionRelative-mb hide-for-large">
<div class="PositionRelative-mb-img"><img src="${imagemPrimeiroBloco}" alt="Duas pessoas usando óculos de sol da marca gucci" />
<div class="PositionAbs-mb-img"><img src="${svgMarca}" alt="" /></div>
</div>
<div class="bg01-txt-01-mb">
<h2 class="gucci-titulos">${tituloPrimeiroBloco}</h2>
<p class="gucci-ps">${textoPrimeiroBloco}</p>
</div>
</div>
</div>
</div>
</section>
<section class="grayBg">
<section class="black">
<div class="row align-middle secFlex">
<div class="columns small-12 medium-6 large-7 small-order-2 large-order-1">
<h3 class="gucci-h3s">${tituloSegundoBloco}</h3>
<p class="gucci-ps">${textoSegundoBloco}</p>
</div>
<div class="columns small-12 medium-6 large-5 text-left small-order-1 large-order-2"><img class="grayBg-img01 " src="${imagemSegundoBloco}" alt="" /></div>
</div>
</section>
<section class="semBg">
<div class="row align-middle secFlex">
<div class="columns small-12 large-7 small-order-2 large-order-1">
<h3 class="gucci-h3s">${tituloTerceiroBloco}</h3>
<p class="gucci-ps">${textoTerceiroBloco}</p>
</div>
<div class="columns small-12 large-5 text-center small-order-1 large-order-2"><img src="${imagemTerceiroBloco}" alt="" /></div>
</div>
</section>
<section class="bgFlutuante">
<div class="row align-middle">
<div class="columns small-12 medium-6 large-5 imgBgFlutuante text-left"><img src="${ImagemQuartoBloco}" alt="" /></div>
<div class="columns small-12 medium-6 large-7">
<div class="blackBox expanded">
<h3 class="gucci-h3s">${tituloQuartoBloco}</h3>
<p class="gucci-ps">${textoQuartoBloco}</p>
</div>
</div>
</div>
</section>
<section class="semBg">
<div class="row secFlex">
<div class="columns small-12 medium-6 large-7 small-order-2 large-order-1">
<h3 class="gucci-h3s">${tituloQuintoBloco}</h3>
<p class="gucci-ps">${textoQuintoBloco}</p>
</div>
<div class="columns small-12 medium-6 large-5  small-order-1 large-order-2 text-center"><img src="${ImagemQuintoBloco}" alt="" /></div>
</div>
</section>
</section>
</section>`;

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