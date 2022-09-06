import getData from "./module/data.js";
import menuDropDown from "./module/menuDropDown.js";
import animationToScroll from './module/animationToScroll.js';
import accordionListFaq from './module/accordionListFaq.js';
import operation from './module/operation.js';

import MenuMobile from "./module/menuMobile.js";
import Modal from './module/modal.js';

getData();
menuDropDown();
animationToScroll();
accordionListFaq();
operation();

// Menu mobile com classe
const btnMenuMobile = document.querySelector('[data-menu-mobile="btn"]');
const listaMenuMobile = document.querySelector('[data-menu-mobile="lista"]');
const eventos = ["click", "touchstart"];

const confgMenuMobile = new MenuMobile(btnMenuMobile, listaMenuMobile, eventos);
confgMenuMobile.init();

// Modal com classe 
const abrir = document.querySelector('[data-modal="link"]');
const container = document.querySelector('[data-modal="container"]');
const fechar = document.querySelector('[data-modal="fechar"]');

const confgModal = new Modal(abrir, fechar, container, eventos);
confgModal.init();