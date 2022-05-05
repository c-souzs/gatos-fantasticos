import cliqueForaItem from "./clique-fora.js";

export default class MenuMobile {
  constructor(btnMenu, listaMenu, eventos) {
    this.btnMenu = btnMenu;
    this.listaMenu = listaMenu;
    this.eventos = eventos;

    this.abrirMenu = this.abrirMenu.bind(this);
  }

  // Abri o menu e ativa a função que verifica se o clique foi fora do menu para fecha-lo
  abrirMenu(event) {
    event.preventDefault();
    this.listaMenu.classList.add("js-ativo");
    this.btnMenu.classList.add("js-ativo-flex");
    cliqueForaItem(this.listaMenu, () => {
      this.listaMenu.classList.remove("js-ativo");
      this.btnMenu.classList.remove("js-ativo-flex");
    });
  }

  // Adiciona os eventos passado como parametro - click e touchstart
  btnMenuEventos() {
    this.eventos.forEach((evento) =>
      this.btnMenu.addEventListener(evento, this.abrirMenu)
    );
  }

  // Inicia os eventos
  inicar() {
    if (this.btnMenu && this.listaMenu) {
      this.btnMenuEventos();
    }
    return this;
  }
}
