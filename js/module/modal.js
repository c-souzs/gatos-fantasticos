export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal, eventos) {
      this.btnAbrir = botaoAbrir;
      this.btnFechar = botaoFechar;
      this.container = containerModal;
      this.e = eventos;
  
      // Muda o contexto do elemento
      this.toffleModalEvento = this.toffleModalEvento.bind(this);
      this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }
  
    // Abre/fecha a modal
    toggleModal() {
      this.container.classList.toggle('js-ativo-flex');
    }
  
    // Adiciona o evento de toggle na modal
    toffleModalEvento(event) {
      event.preventDefault();
      this.toggleModal();
    }
  
    // Fecha a modal se clicar do lado de fora
    cliqueForaModal(event) {
      if (event.target === this.container) {
        this.toggleModal();
      }
    }
  
    // Adiciona os eventos aos elementos da modal
    modalEventos() {
      this.e.forEach(ev => {
        this.btnAbrir.addEventListener(ev, this.toffleModalEvento);
        this.btnFechar.addEventListener(ev, this.toffleModalEvento);
        this.container.addEventListener(ev, this.cliqueForaModal);
      });
    }
  
    // Inicia os eventos
    inicar() {
      if (this.btnAbrir && this.btnFechar && this.container) {
        this.modalEventos();
      }
      return this;
    }
  }