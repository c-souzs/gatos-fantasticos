import outSideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(buttonMenu, listMenu, events) {
    this.buttonMenu = buttonMenu;
    this.listMenu = listMenu;
    this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.listMenu.classList.add("js-ativo");
    this.buttonMenu.classList.add("js-ativo-flex");
    outSideClick(this.listMenu, () => {
      this.listMenu.classList.remove("js-ativo");
      this.buttonMenu.classList.remove("js-ativo-flex");
    });
  }

  eventMenu() {
    this.events.forEach((evento) =>
      this.buttonMenu.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.buttonMenu && this.listMenu) {
      this.eventMenu();
    }
    return this;
  }
}
