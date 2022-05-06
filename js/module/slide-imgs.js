import slideGatos from "./slide.js";
import imagemApi from './imagem-api.js';

export default function slideImgs(){
    const imgs = [];

    const listarImgs = () => {
        const slideListaImgs = document.querySelector('[data-slide="imgs"]');
        const slideListaBtns = document.querySelector('[data-slide="btns"]');

        const imgsHtml = imgs.reduce((acumulador, img, index) => {
            return acumulador += `<li><img src="${img}" alt="${index}"></li>`;
        }, '');

        slideListaImgs.innerHTML = imgsHtml;
        slideListaBtns.innerHTML = imgsHtml;

        slideGatos();
    }

    const buscarImgs = async () => {
        for (let i = 0; i < 5; i++) {
            const promiseResultado = await imagemApi();
            const url = promiseResultado.responseJson[0].url;
            imgs.push(url);
        }
        listarImgs();
    }

    buscarImgs();
}