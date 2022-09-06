export default function outSideClick(element, callBack) {
  const html = document.documentElement;
  const events = ["click", "touchstart"];

  const checkClick = (e) => {
    if (!element.contains(e.target)) {
      element.removeAttribute("clique-fora");
      events.forEach((e) => html.removeEventListener(e, checkClick));
      callBack();
    }
  };

  if (!element.hasAttribute("clique-fora", "")) {
    events.forEach((evento) => {
      setTimeout(() => html.addEventListener(evento, checkClick), 100);
    });
    element.setAttribute("clique-fora", "");
  }
}
