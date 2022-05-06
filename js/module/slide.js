export default function slideGatos() {
    const container = document.querySelector('[data-slide="container-imgs"]');
    const listaSlide = document.querySelector('[data-slide="imgs"]');
    const btnsSlide = [
      ...document.querySelector('[data-slide="btns"]').children,
    ];
    const dados = { pXfinal: 0, pXincial: 0, distancia: 0 };
    let infoSlideIndex;
  
    // Move o slide baseado no valor passada e guarda esse valor.
    const moverSlide = (dX) => {
      dados.distanciaPosicao = dX;
      listaSlide.style.transform = `translate3d(${dX}px, 0, 0)`;
    };
  
    // Calcula o valor e a posição para o slide ficar centralizado.
    const posicaoSlideMargin = (slide) => {
      const margin = (container.offsetWidth - slide.offsetWidth) / 2;
      return -(slide.offsetLeft - margin);
    };
  
    // Salva o valor para o slide ficar centralizado e a referência de todos os slides.
    const dadosSlides = [...listaSlide.children].map((slide) => {
      const posicao = posicaoSlideMargin(slide);
      return { slide, posicao };
    });
  
    // Guarda como refêrencia o valor do index atual, próximo e anterior.
    const dadosSlideIndex = (index) => {
      const qtdSlides = dadosSlides.length - 1;
      infoSlideIndex = {
        proximo: index === qtdSlides ? null : index + 1,
        atual: index,
        anterior: index ? index - 1 : null,
      };
    };
  
    // Adiciona uma classe de ativo no slide e no seu botão respectivo.
    const addClasseAtivo = () => {
      dadosSlides.forEach((dadosSlide) =>
        dadosSlide.slide.classList.remove("slide-ativo")
      );
      dadosSlides[infoSlideIndex.atual].slide.classList.add("slide-ativo");
  
      btnsSlide.forEach((btn) => btn.classList.remove("slide-ativo"));
      btnsSlide[infoSlideIndex.atual].classList.add("slide-ativo");
    };
  
    // Move o slide baseado no index, atualizando também a posição final e os dados do objeto infoSlideIndex.
    // É acionado para o slide começar correto no index 0.
    const moverSlideIndex = (index) => {
      const slide = dadosSlides[index];
      moverSlide(slide.posicao);
      dadosSlideIndex(index);
      dados.pXfinal = slide.posicao;
      addClasseAtivo();
    };
    moverSlideIndex(0);
  
    // Move o slide para o anterior baseado na refêrencia salva no infoSlideIndex.
    const slideAnterior = () => infoSlideIndex.anterior !== undefined ? moverSlideIndex(infoSlideIndex.anterior) : '';
  
    // Move o slide para o proximo baseado na refêrencia salva no infoSlideIndex.
    const slidePromixo = () => infoSlideIndex.proximo !== undefined ? moverSlideIndex(infoSlideIndex.proximo) : '';
  
    // Adiciona uma tranição na lista de slide.
    const transicao = ativo => listaSlide.style.transition = ativo ? "transform .3s" : "";
  
    // Calcula a posição que o cursor está baseado no clique inicial, salvo no primeiro clique e na distância.
    const atualizarPosicao = cX => {
      dados.distancia = (dados.pXincial - cX) * 1.6;
      return dados.pXfinal - dados.distancia;
    };
  
    // CallBack do mousemove/touchmove. Aqui é verificado tipo de clique para ter acesso ao clientX.
    const cliqueMover = e => {
      const tipoCliqueX =
        e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;
      const posicaoFinal = atualizarPosicao(tipoCliqueX);
      moverSlide(posicaoFinal);
    };
  
    // Verifica se o clique foi no slide em si ou no container para evitar bug. Novamente verifica o tipo de clique para adicionar o evento respectivo e ter acesso ao clientX.
    const cliqueInicial = (e) => {
      if (e.target === container) return
      
      let tipoEvento;
      let distancia;
      if (e.type === "mousedown") {
        e.preventDefault();
        distancia = e.clientX;
        tipoEvento = "mousemove";
      } else {
        distancia = e.changedTouches[0].clientX;
        tipoEvento = "touchmove";
      }
      dados.pXincial = distancia;
      container.addEventListener(tipoEvento, cliqueMover);
      transicao(false);
    };
  
    container.addEventListener("mousedown", cliqueInicial);
    container.addEventListener("touchstart", cliqueInicial);
  
    // CallBack do mouseup/touchend. Atualiza a posição final baseado na distancia
    const cliqueFinal = (event) => {
      const tipoClique = event.type === "mouseup" ? "mousemove" : "touchmove";
      dados.pXfinal = dados.distanciaPosicao;
      transicao(true);
      mudarSlideAoFim();
      container.removeEventListener(tipoClique, cliqueMover);
    };
  
    const mudarSlideAoFim = () => {
      if (dados.distancia > 120 && infoSlideIndex.proximo !== null) {
        slidePromixo();
      } else if (dados.distancia < -120 && infoSlideIndex.anterior !== null) {
        slideAnterior();
      } else {
        moverSlideIndex(infoSlideIndex.atual);
      }
    };
  
    container.addEventListener("mouseup", cliqueFinal);
    container.addEventListener("touchend", cliqueFinal);
  
    // Eventos navegação slide
    const eventos = ["click", "touchstart"];
  
    eventos.forEach((evento) => {
      btnsSlide.forEach((btn, index) =>
        btn.addEventListener(evento, () => {
          transicao(true);
          moverSlideIndex(index);
        })
      );
    });
  }
  