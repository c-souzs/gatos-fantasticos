export default function cliqueFora(elemento, callBack) {
  // O evento bubble ocorre quando há um clique em algum elemento, nisso o javascript verifica todos os elementos pais de onde foi clicado e se tiver algum evento de clique neles é executado.
  // Nesse raciocínio, pode adicionar um evento de clique no elemento pai para ocorre após o clique em algum elemento, dentro do callBack de listener. Nesse momento é adicionado e executado um evento no pai de todos, o html. Nisso quando o usuário clicar em qualquer lugar basta verificar se tem algum evento no html, caso tenha também é verificado o local do clique.

  const html = document.documentElement;
  const eventos = ["click", "touchstart"];

  const verificarClique = (e) => {
    if (!elemento.contains(e.target)) {
      elemento.removeAttribute("clique-fora");
      eventos.forEach((e) => html.removeEventListener(e, verificarClique));
      callBack();
    }
  };

  if (!elemento.hasAttribute("clique-fora", "")) {
    eventos.forEach((evento) => {
      // Joga na fila e é executado por ultimo, o 100 ms é para evitar bug
      setTimeout(() => html.addEventListener(evento, verificarClique), 100);
    });
    elemento.setAttribute("clique-fora", "");
  }
}
