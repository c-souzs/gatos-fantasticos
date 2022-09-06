import animateNumbers from "./animationNumbers.js";

export default function animationToScroll() {
  const sections = document.querySelectorAll("body section");
  const sectionVisible = "section-visivel";

  const calculateDistanceFromTop = (d) => {
    const distanceRounded = Math.floor(d);
    const windowHalf = window.innerHeight * 0.6;

    return distanceRounded - windowHalf;
  };

  const checkSectionNumbers = (section, sectionVisible) => {
    const sectionNumbers = document.querySelector('[data-numero="section"]');

    if (
      section === sectionNumbers &&
      sectionVisible &&
      !sectionNumbers.hasAttribute("animou-numeros")
    ) {
      animateNumbers();
      sectionNumbers.setAttribute("animou-numeros", "");
    }
  };

  const animateToScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const visible = calculateDistanceFromTop(sectionTop) < 0;

      checkSectionNumbers(section, visible);

      visible ? section.classList.add(sectionVisible) : "";
    });
  };

  if (sections.length) {
    sections[0].classList.add(sectionVisible);
    window.addEventListener("scroll", animateToScroll);
  }
}
