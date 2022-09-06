export default function accordionListFaq() {
    const questions = document.querySelectorAll('[data-faq="pergunta"] span');
    const answers = document.querySelectorAll('[data-faq="pergunta"] p');
    const classToggle = "js-ativo";
  
    const settingsAccordion = (i) => {
      const elementsPositionI = [questions[i], answers[i]];

      elementsPositionI.forEach(element => element.classList.toggle(classToggle));
    };
  
    const activeFrist = () => {
      const lastElement = [questions[0], answers[0]];

      lastElement.forEach(element => element.classList.toggle(classToggle));
    };
  
    const activeAccordion = () => {
      activeFrist();
      questions.forEach((qt, index) => qt.addEventListener('click', () => settingsAccordion(index)));
    };
  
    questions.length && answers.length ? activeAccordion() : "";
  }
  