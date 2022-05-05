import MenuMobile from "./module/menu-mobile.js";
// Menu mobile com classe
const btnMenuMobile = document.querySelector('[data-menu-mobile="btn"]');
const listaMenuMobile = document.querySelector('[data-menu-mobile="lista"]');
const eventos = ["click", "touchstart"];

const confgMenuMobile = new MenuMobile(btnMenuMobile, listaMenuMobile, eventos);
confgMenuMobile.inicar();