export default class Modal {
    constructor(buttonOpen, buttonClose, containerModal, events) {
      this.buttonOpen = buttonOpen;
      this.buttonClose = buttonClose;
      this.container = containerModal;
      this.events = events;
  
      this.toggleModalEvent = this.toggleModalEvent.bind(this);
      this.clickOutSideModal = this.clickOutSideModal.bind(this);
    }
  
    toggleModal() {
      this.container.classList.toggle('js-ativo-flex');
    }
  
    toggleModalEvent(event) {
      event.preventDefault();
      this.toggleModal();
    }
  
    clickOutSideModal(event) {
      if (event.target === this.container) {
        this.toggleModal();
      }
    }
  
    eventsModal() {
      this.events.forEach(ev => {
        this.buttonOpen.addEventListener(ev, this.toggleModalEvent);
        this.buttonClose.addEventListener(ev, this.toggleModalEvent);
        this.container.addEventListener(ev, this.clickOutSideModal);
      });
    }
  
    // Inicia os eventos
    init() {
      if (this.buttonOpen && this.buttonClose && this.container) {
        this.eventsModal();
      }
      return this;
    }
  }