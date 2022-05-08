import dados from "./module/dados.js";
import MenuMobile from "./module/menu-mobile.js";
import menuDropDown from "./module/menu-drop-down.js";
import animacaoAoScroll from './module/animacao-ao-scroll.js';
import accordionListFaq from './module/accordion-list-faq.js';
import Modal from './module/modal.js';
import funcionamento from './module/funcionamento.js';

dados();
menuDropDown();
animacaoAoScroll();
accordionListFaq();
funcionamento();

// Menu mobile com classe
const btnMenuMobile = document.querySelector('[data-menu-mobile="btn"]');
const listaMenuMobile = document.querySelector('[data-menu-mobile="lista"]');
const eventos = ["click", "touchstart"];

const confgMenuMobile = new MenuMobile(btnMenuMobile, listaMenuMobile, eventos);
confgMenuMobile.inicar();

// Modal com classe 
const abrir = document.querySelector('[data-modal="link"]');
const container = document.querySelector('[data-modal="container"]');
const fechar = document.querySelector('[data-modal="fechar"]');

const confgModal = new Modal(abrir, fechar, container, eventos);
confgModal.inicar();