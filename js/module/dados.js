import fecthApi from "./fetch-api.js";
import listarRacas from "./listar-racas.js";
import slideImgs from "./slide-imgs.js";
import depoimentos from "./depoimentos.js";

export default async function dados() {
  let erro = false;
  // Mostra a modal informando que os dados estão sendo carregados;
  const divInfo = document.querySelector(".info-fetch");
  divInfo.classList.add("js-ativo-flex");

  // Verifica se deu algum erro ao buscar os dados na api.
  const verificarErro = (r) => {
    if (r) {
      if (!r.ok) {
        erro = true;
        return true;
      }
    } else {
      erro = true;
      return true;
    }
  };

  // Busca imgs na api 
  const bImgs = async (qtd) => {
    const imgs = [];
    for (let i = 0; i < qtd; i++) {
      const pR = await fecthApi("https://api.thecatapi.com/v1/images/search");
      if (verificarErro(pR.response)){
        return; 
    }  
      pR.responseJson.length ? imgs.push(pR.responseJson[0].url) : "";
    }
    return imgs;
  };

  // Busca as informações de cada raça na api
  const bRacasListarRacas = async () => {
    const pR = await fecthApi("https://api.thecatapi.com/v1/breeds");
    if (verificarErro(pR.response)){
        return; 
    }  
    const arrayDados = pR.responseJson;
    const racas = arrayDados.filter((item, index) => index < 5);

    return racas;
  };

  // Busca os depoimentos na api
  const bDepoimentos = async () => {
    const pR = await fecthApi(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    if (verificarErro(pR.response)){
        return; 
    }  
    const depoimentos = pR.responseJson;

    return depoimentos;
  };

  const rImgsListarRacas = await bImgs(5);
  const rRacasListarRacas = await bRacasListarRacas();
  const rImgsSlide = await bImgs(5);
  const rImgsDepoimento = await bImgs(5);
  const rDepoimentos = await bDepoimentos();

  // Verifica se deu deu tudo ao buscar os dados, caso tenha dado algum erro ele é tratado
  if (
    !erro &&
    rImgsListarRacas &&
    rRacasListarRacas &&
    rImgsSlide &&
    rImgsDepoimento &&
    rDepoimentos
  ) {
    listarRacas(rImgsListarRacas, rRacasListarRacas);
    slideImgs(rImgsSlide);
    depoimentos(rImgsDepoimento, rDepoimentos);
    
    divInfo.classList.remove("js-ativo-flex");
  } else {
    const pAlerta = divInfo.querySelector(".mensagem");
    let cont = 11;

    const atualizarTempo = () => {
      cont--;
      if (cont === 0) {
        clearInterval(tempoAtualizar);
        location.reload();
      }
      pAlerta.innerText = `Ocorreu um erro ao buscar algum dado na API. A página será atualizada em ${cont} segundos.`;
    };

    const tempoAtualizar = setInterval(atualizarTempo, 1000);
  }
}
