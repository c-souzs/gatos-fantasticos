export default function accordionListFaq() {
    const perguntas = document.querySelectorAll('[data-faq="pergunta"] span');
    const respostas = document.querySelectorAll('[data-faq="pergunta"] p');
    const classeToggle = "js-ativo";
  
    // Remove ou adiciona a classe de ativo na pergunta e resposta clicada
    const confgAccordion = (i) => {
      perguntas[i].classList.toggle(classeToggle);
      respostas[i].classList.toggle(classeToggle);
    };
  
    // Deixa a pergunta pergunta ativa com o faq
    const ativarPrimeiro = () => {
      perguntas[0].classList.toggle(classeToggle);
      respostas[0].classList.toggle(classeToggle);
    };
  
    // Adiciona o evento de clique nas perguntas
    const ativarAccordion = () => {
      ativarPrimeiro();
      perguntas.forEach((pergunta, index) => pergunta.addEventListener('click', () => confgAccordion(index)));
    };
  
    perguntas.length && respostas.length ? ativarAccordion() : "";
  }
  