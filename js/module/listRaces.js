import addEventLoadItem from "./loadItem.js";
import navigationTab from "./navigationTab.js";

export default async function listRaces(dImgs, dRacas) {
  const listaImgs = document.querySelector("[data-lista-imgs]");
  const listDescription = document.querySelector("[data-lista-descricoes]");

  const insertImgs = () => {
    const imgsHtml = dImgs.reduce((acc, img, index) => {
      const html = `
        <li class="container-skeleton">
          <div class="anima-skeleton"></div>
          <img src="${img}" alt="${index}"/>
        </li>
      `;
      return (acc += html);
    }, "");

    listaImgs.innerHTML = imgsHtml;

    const imagesList = listaImgs.querySelectorAll('li img');
    addEventLoadItem(imagesList);
  };

  const insertRaces = () => {
    const htmlDescription = (
      id,
      name,
      description,
      temperament,
      weight
    ) => {
      const html = `
           <div class="descricao" data-navegacao-tab="anima-${
             animacao ? "left" : "bottom"
           }" id={${id}}>
               <div>
                   <div>
                       <h3>${name}</h3>
                       <p>${description}</p>
                   </div>
               </div>
               <div class="linha">
                   <div>
                       <h3>Temperamento</h3>
                       <p>${temperament}</p>
                   </div>
                   <div>
                       <h3>Peso</h3>
                       <p>${weight[0]} kg - ${weight[1]} kg</p>
                   </div>
               </div>
           </div>`;
      return html;
    };

    let animacao = false;
    const descricoesHtml = dRacas.reduce((acumulador, item) => {
      const {
        id,
        name,
        description,
        temperament,
        weight
      } = item;
      const peso = weight.imperial.split("-");
      const pesoEstimado = peso.map((peso) => +peso * 0.45);
      animacao = !animacao;

      const html = htmlDescription(
        id,
        name,
        description,
        temperament,
        pesoEstimado
      );

      return (acumulador += html);
    }, "");

    listDescription.innerHTML = descricoesHtml;
  };

  insertImgs();
  insertRaces();

  navigationTab();
}
