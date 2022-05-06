export default function navegacaoTab() {
    const imgs = document.querySelectorAll(
      '[data-navegacao-tab="imgs"] > li img'
    );
    const descricoes = document.querySelectorAll(
      '[data-navegacao-tab="descricoes"] .descricao'
    );
    const eventos = ["click", "touchstart"];
      

    console.log(imgs, descricoes);
    
    // Remove a classe js-ativo das descrições e coloca apenas na descrição correspondente
    const trocarDescricao = (i) => {
      descricoes.forEach((descricao) => descricao.classList.remove("js-ativo"));
      const animacao = descricoes[i].getAttribute("data-navegacao-tab");
      descricoes[i].classList.add("js-ativo", animacao);
    };
  
    // Adiciona o evento de clique na imagem e chama a função para mostrar a descrição. Ela também ativa a primeira descrição ao ser chamada
    const navegacao = () => {
      descricoes[0].classList.add("js-ativo");
  
      imgs.forEach((img, index) => {
        eventos.forEach((evento) =>
          img.addEventListener(evento, () => trocarDescricao(index))
        );
      });
    };
  
    imgs.length && descricoes.length ? navegacao() : "";
  }
  