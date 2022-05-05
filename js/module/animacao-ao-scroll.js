import animaNumeros from "./anima-numeros.js";

export default function animacaoAoScroll() {
  const sections = document.querySelectorAll("body section");
  const sectionVisivel = "section-visivel";

  // Calcula uma porcentagem do tamanho da tela para verificar se a section está visível ou não e evitar que a animação tenha bugs.
  const calcularDistanciaTopo = (distancia) => {
    const distanciaArredondada = Math.floor(distancia);
    const windowMetade = window.innerHeight * 0.6;

    return distanciaArredondada - windowMetade;
  };

  // Verifica se a section numero está visivel, se estiver chama o anima numeros e adiciona o atributo para evitar bugs e não repetir a animação.
  const verificarSectionNumeros = (s, v) => {
    const sectionNumeros = document.querySelector('[data-numero="section"]');

    if (
      s === sectionNumeros &&
      v &&
      !sectionNumeros.hasAttribute("animou-numeros")
    ) {
      animaNumeros();
      sectionNumeros.setAttribute("animou-numeros", "");
    }
  };

  // Verifica se a section esta visivel ou não
  const animarSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visivel = calcularDistanciaTopo(sectionTop) < 0;

      verificarSectionNumeros(section, visivel);

      visivel ? section.classList.add(sectionVisivel) : "";
    });
  };

  if (sections.length) {
    sections[0].classList.add(sectionVisivel);
    window.addEventListener("scroll", animarSection);
  }
}
