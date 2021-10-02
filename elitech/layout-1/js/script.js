//Global

//Trazendo o formulário
const form = document.querySelector('.form');

//Trazendo o botão do tipo "RESET"
let botao = form.querySelector('#btn-reset'); 

//Trazendo a caixa de texto (vinculando um elemento html de id cod a uma variável chamada caixaDeTexto)
let caixaDeTexto = document.getElementById('cod');   

function gerarCodigoFonte(){
    
    
    function recebeEventoForm(evento){
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiar`;
        
        //Selecionando os componentes do html

        //pegando os valores do titulo
        const tituloGeral = form.querySelector('#tituloGeral').value;
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
        const tituloEsquero = form.querySelector('#tituloEsquerdo').value;
        const tituloDireito = form.querySelector('#tituloDireito').value;
        const textoBlocoEsquerdo = form.querySelector('#textoBlocoEsquerdo').value;
        const textoBlocoDireito = form.querySelector('#textoBlocoDireito').value;

        //Pegando valores do quinto bloco
        const tituloQuintoBloco = form.querySelector('#tituloQuintoBloco').value;
        const imagemQuintoBloco = form.querySelector('#imagemQuintoBloco').value;
        const altImagemQuintoBloco = form.querySelector('#altImagemQuintoBloco').value;
        const textoQuintoBloco = form.querySelector('#textoQuintoBloco').value;
        
        //Inserindo o código-fonte na variável codigoFonte e já adionando os valores das variáveis
        let codigoFonte = `<section class="personalizado">
        <div class="personalizado-banner">
          <div class="row align-center">
            <div class="columns perso-large-10">
              <div class="personalizado-banner-background">
                <h2 class="personalizado-titulo-text">${tituloGeral}</h2> 
                <div class="personalizado-titulo-border"></div>
                <p class="personalizado-text banner-bibliografia-text">
                 ${textoTitulo}
                </p>         
              </div>
            </div>
          </div>
        </div>
      
        <div class="personalizado-informacao">
          <div class="row align-center">
            <div class="columns large-10">
              <div class="personalizado-main-informacao item-1">
                <div class="personalizado-informacao-texts item-1">
                  <h2 class="personalizado-informacao-texts-titulo">${tituloPrimeiroBloco}</h2>
                  <p class="personalizado-text informacao-text">
                    ${textoPrimeiroBloco}
                  </p>            
                </div>
                <div class="personalizado-informacao-img">
                  <img 
                    src="${imagemPrimeiroBloco}" 
                    alt="${altImagemPrimeiroBloco}" 
                  >
                </div>
              </div>
      
              <div class="personalizado-main-informacao item-2">
                <div class="personalizado-informacao-texts item-2">
                  <h2 class="personalizado-informacao-texts-titulo">${tituloSegundoBloco}</h2>
                  <p class="personalizado-text informacao-text">
                    ${textoSegundoBloco}
                  </p>           
                </div>
                <div class="personalizado-informacao-img">
                  <img 
                    src="${imagemSegundoBloco}" 
                    alt="${altImagemSegundoBloco}" 
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="personalizado-banner-2">
          <div class="row align-center">
            <div class="columns perso-large-10">
              <div class="personalizado-banner-background bk-banner-2 flex-banner">
                <div class="personalizado-banner-texts txt-banner-2">
                  <h2 class="personalizado-titulo-text">${tituloTerceiroBloco}</h2> 
                  <div class="personalizado-titulo-border border-banner-2"></div>
                  <p class="personalizado-text banner-bibliografia-text">
                  ${textoTerceiroBloco}
                  </p>            
                </div>
                <img
                  class="img-banner" 
                  src="${imagemTerceiroBloco}" 
                  alt="${altImagemTerceiroBloco}" 
                >
              </div>
            </div>
          </div>
        </div>
      
        <div class="personalizado-informacao">
          <div class="row align-center">
            <div class="columns large-10">
              <div class="personalizado-main-informacao item-1">
                <div class="personalizado-informacao-2-texts">
                  <h2 class="personalizado-informacao-texts-titulo">${tituloEsquero}</h2>
                  <p class="personalizado-text informacao-text">
                   ${textoBlocoEsquerdo}
                  </p>
                </div>
      
                <div class="personalizado-informacao-2-texts">
                  <h3 class="personalizado-informacao-texts-titulo">${tituloDireito}</h3>
                  <p class="personalizado-text informacao-text">
                    ${textoBlocoDireito}
                  </p>
                </div>
              </div>
      
              
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div class="personalizado-banner">
          <div class="row align-center">
            <div class="columns perso-large-10">
              <div class="personalizado-banner-background flex-banner">
                <div class="personalizado-banner-texts txt-banner-3">
                  <h2 class="personalizado-titulo-text">${tituloQuintoBloco}</h2> 
                  <div class="personalizado-titulo-border"></div>
                  <p class="personalizado-text banner-bibliografia-text">
                    ${textoQuintoBloco}
                  </p>            
                </div>
                <img
                  class="img-banner" 
                  src="${imagemQuintoBloco}" 
                  alt="${altImagemQuintoBloco}" 
                >
              </div>
            </div>
          </div>
        </div>
        
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
      };
}
gerarCodigoFonte();

function mostrarCSS(){
    //Alterando o texto do botão de Copiar
    botao.innerHTML = `Copiar`;
    caixaDeTexto.innerHTML = codigoCss;    
};

const codigoCss = `/*********GLOBAL********/

      @media(max-width: 1280px) {
        .perso-large-10 {
          flex: 0 0 83.33333%;
          max-width: 83.33333%;
        }
      }
      
      @media(max-width: 1023px) {
        .perso-large-10 {
          flex: inherit;
          max-width: inherit;
        }
      }
      
      .personalizado-text {
        line-height: 22px;
        font-size: 16px;
        font-weight: 400;
      }
      
      /***********************/
      
      /**personalizado-banner**/
      
      .personalizado-banner-background {
        padding: 34px 108px 41.4px;
        background-color: #004991;
      }
      
      .personalizado-titulo-text {
        margin-bottom: 8px;
        line-height: 41px;
        font-weight: 700;
        font-size: 30px;
        color: #FFFFFF;
      }*
      
      .personalizado-titulo-border {
        margin-bottom: 33px;
        width: 94px;
        height: 12px;
        background-color: #EC7B10;
      }
      
      .personalizado-bibliografia {
        max-width: 1064px;
      }
      
      .banner-bibliografia-text {
        max-width: 1064px;
        color: #FFFFFF;
      }
      
      .personalizado-text:not(:last-child) {
        margin-bottom: 30px;
      }
      
      /**personalizado-informação**/
      
      .personalizado-informacao {
        margin: 50px 0;
      }
      
      .personalizado-main-informacao{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .personalizado-main-informacao:first-child {
        margin-bottom: 40px;
      }
      
      .personalizado-informacao-texts {
        max-width: 535px;
        margin-right: 16px;
      }
      
      .personalizado-informacao-texts.item-2 {
        order: 2;
        margin: 0 0 0 20px;
      }
      
      .personalizado-informacao-texts-titulo {
        line-height: 28px;
        font-weight: 700;
        font-size: 21px;
        color: #004C99;
        margin-bottom: 20px;
      }
      
      .informacao-text {
        color: #3A3A3A;
      }
      
      .personalizado-informacao-img img {
        display: block;
        width: 100%;
        min-width: 338px;
      }
      
      /**personalizado-banner-2**/
      
      .flex-banner {
        display: flex;
        align-items: center;
      }
      
      .bk-banner-2 {
        background-color: #EC7B10;
      }
      
      .border-banner-2 {
        background-color: #004991;
      }
      
      .txt-banner-2 {
        margin-right: 16px;
      }
      
      .img-banner {
        width: 308px;
      }
      
      /**personalizado-informação-2**/
      
      .item-1 .personalizado-informacao-2-texts:first-child {
        margin-right: 16px;
      }
      
      /**personalizado-banner-3**/
      
      .txt-banner-3 {
        order: 2;
        margin-left: 16px;
      }
      
      
      
      
      @media(max-width: 1280px) {
        .personalizado-banner {
          background-color: #004991;
        }
      
        .personalizado-banner-background {
          padding: 34px 0px 41.4px 0px;
        }
      
        .personalizado-banner-2 {
          background-color: #EC7B10;
        }
      }
      
      @media(max-width: 1024px) {
        .personalizado-titulo-text {
          line-height: 19px;
          font-size: 14px;
          margin-bottom: 3px;
        }
      
        .personalizado-titulo-border {
          margin-bottom: 16px;
        }
      
        .personalizado-text {
          line-height: 17px;
          font-size: 12px;
        }
      
        .personalizado-text:not(:last-child) {
          margin-bottom: 26px;
        }
      
        .img-banner {
          width: 225px;
        }
      }
      
      @media(max-width: 779px) {
        .personalizado-main-informacao {
          flex-direction: column;
          align-items: stretch;
        }
        .personalizado-informacao-texts {
          margin:0 0 15px 0;
          max-width: none;
        }
        .personalizado-informacao-texts.item-2 {
          order: -1;
          margin:0 0 15px 0;
        }
      
        .personalizado-informacao-img {
          align-self: center;
        }
      
        .personalizado-informacao-img img {
          min-width: 200px;
        }
      
        .flex-banner {
          flex-direction: column;
        }
        
        .txt-banner-2 {
          margin: 0 0 16px 0;
        }
      
        .txt-banner-3 {
          order: -1;
          margin: 0 0 16px 0;
        }
      }`;