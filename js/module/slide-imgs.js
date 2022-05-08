import slideGatos from "./slide.js";

export default function slideImgs(dImgs){
    const slideListaImgs = document.querySelector('[data-slide="imgs"]');
    const slideListaBtns = document.querySelector('[data-slide="btns"]');

    const imgsHtml = dImgs.reduce((acumulador, img, index) => {
        return acumulador += `<li><img src="${img}" alt="${index}"></li>`;
    }, '');

    slideListaImgs.innerHTML = imgsHtml;
    slideListaBtns.innerHTML = imgsHtml;

    slideGatos();
}