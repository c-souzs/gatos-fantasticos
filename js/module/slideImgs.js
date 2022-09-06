import slideCats from "./slide.js";
import addEventLoadItem from "./loadItem.js";

export default function slideImgs(dImgs){
    const slideListaImgs = document.querySelector('[data-slide="imgs"]');
    const slideListaBtns = document.querySelector('[data-slide="btns"]');

    const insertElementsDom = () => {
        const imgsHtml = dImgs.reduce((acumulador, img, index) => {
            return acumulador += `
                <li class="container-skeleton">
                    <div class="anima-skeleton"></div>
                    <img src="${img}" alt="${index}">
                </li>
            `;
        }, '');
    
        slideListaImgs.innerHTML = imgsHtml;
        slideListaBtns.innerHTML = imgsHtml;
    }

    const addEventLoadItems = () => {
        const imagesSlide = Array.from(slideListaImgs.querySelectorAll('li img'));
        const imagesSlideButtons = [...slideListaBtns.querySelectorAll('li img')];

        const elementsSlide = imagesSlide.concat(imagesSlideButtons);
        
        addEventLoadItem(elementsSlide);
    }

    insertElementsDom();
    addEventLoadItems();
    slideCats();
}