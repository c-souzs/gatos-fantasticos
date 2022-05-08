import navegacaoTab from "./navegacao-tab.js";

export default async function listarRacas(dImgs, dRacas) {
  const listaImgs = document.querySelector("[data-lista-imgs]");
  const listaDescricoes = document.querySelector("[data-lista-descricoes]");

  // Lista as imgs da raça no dom
  const imgs = () => {
    const imgsHtml = dImgs.reduce((acumulador, img, index) => {
      const html = `<li><img src="${img}" alt="${index}"/></li>`;
      return (acumulador += html);
    }, "");

    listaImgs.innerHTML = imgsHtml;
  };

  // Busca e lista as descricoes de cada raca no dom
  const racas = () => {
    const htmlDescricao = (
      id,
      nome,
      descricao,
      temperamento,
      peso
    ) => {
      const html = `
           <div class="descricao" data-navegacao-tab="anima-${
             animacao ? "left" : "bottom"
           }" id={${id}}>
               <div>
                   <div>
                       <h3>${nome}</h3>
                       <p>${descricao}</p>
                   </div>
               </div>
               <div class="linha">
                   <div>
                       <h3>Temperamento</h3>
                       <p>${temperamento}</p>
                   </div>
                   <div>
                       <h3>Peso</h3>
                       <p>${peso[0]} kg - ${peso[1]} kg</p>
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

      const html = htmlDescricao(
        id,
        name,
        description,
        temperament,
        pesoEstimado
      );

      return (acumulador += html);
    }, "");

    listaDescricoes.innerHTML = descricoesHtml;
  };

  imgs();
  racas();

  navegacaoTab();
}
