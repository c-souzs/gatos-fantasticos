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
      peso,
      idade,
      origem,
      inteligencia,
      amigavel
    ) => {
      const html = `
           <div class="descricao" data-navegacao-tab="anima-${
             animacao ? "left" : "bottom"
           }" id={${id}}>
               <div class="r1">
                   <div>
                       <h3>${nome}</h3>
                       <p>${descricao}</p>
                   </div>
               </div>
               <div class="r2">
                   <div>
                       <h3>Temperamento</h3>
                       <p>${temperamento}</p>
                   </div>
                   <div>
                       <h3>Peso</h3>
                       <p>${peso[0]} kg - ${peso[1]} kg</p>
                   </div>
               </div>
               <div class="r3">
                   <div>
                       <h3>Expectitativa de vida</h3>
                       <p>${idade[0]} anos - ${idade[1]} anos</p>
                   </div>
                   <div>
                       <h3>Origem</h3>
                       <p>${origem}</p>
                   </div>
               </div>
               <div class="r4">
                   <div>
                       <h3>Inteligência</h3>
                       <p>${inteligencia}</p>
                   </div>
                   <div>
                       <h3>Amigável</h3>
                       <p>${amigavel}</p>
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
        weight,
        life_span,
        origin,
        intelligence,
        dog_friendly,
      } = item;
      const peso = weight.imperial.split("-");
      const pesoEstimado = peso.map((peso) => +peso * 0.45);
      const idadeEstimada = life_span.split("-");
      const niveis = {
        0: "0 - nível muito baixo",
        1: "1 - nível baixo",
        2: "2 - nível razoável",
        3: "3 - nível médio",
        4: "4 - nível alto",
        5: "5 - nível altíssimo",
      };
      const inteligencia = intelligence.toString();
      const amigavel = dog_friendly.toString();
      animacao = !animacao;

      const html = htmlDescricao(
        id,
        name,
        description,
        temperament,
        pesoEstimado,
        idadeEstimada,
        origin,
        niveis[inteligencia],
        niveis[amigavel]
      );

      return (acumulador += html);
    }, "");

    listaDescricoes.innerHTML = descricoesHtml;
  };

  imgs();
  racas();

  navegacaoTab();
}
