import listRaces from "./listRaces.js";
import slideImgs from "./slideImgs.js";
import testimonys from "./testimonys.js";

export default async function getData() {
  let error = false;
  const alertError = document.querySelector(".info-fetch");
  alertError.classList.add("js-ativo-flex");

  const checkError = (promise) => {
    if(promise){
      if(!promise.ok){
        error = true;
        return true;
      }
    } else {
      error = true;
      return true;
    }
  };

  const bImgs = async (amount) => {
    const imgs = [];

    for (let i = 0; i < amount; i++) {
      const pR = await fetch("https://api.thecatapi.com/v1/images/search");

      if (checkError(pR)) return; 

      const responseJson = await pR.json();

      responseJson.length ? imgs.push(responseJson[0].url) : "";
    }

    return imgs;
  };

  const bListRaces = async () => {
    const pR = await fetch("https://api.thecatapi.com/v1/breeds");

    if (checkError(pR)) return; 

    const arrayData = await pR.json();
    const races = arrayData.filter((_, index) => index < 5);

    return races;
  };

  const bTestimony = async () => {
    const pR = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    
    if (checkError(pR)) return; 

    return await pR.json();
  };

  const rImgsListRaces = await bImgs(5);
  const rListRaces = await bListRaces();
  const rImgsSlide = await bImgs(5);
  const rImgsTestimony = await bImgs(5);
  const rTestimony = await bTestimony();

  if (
    !error &&
    rImgsListRaces &&
    rListRaces &&
    rImgsSlide &&
    rImgsTestimony &&
    rTestimony
  ) {
    listRaces(rImgsListRaces, rListRaces);
    slideImgs(rImgsSlide);
    testimonys(rImgsTestimony, rTestimony);
    
    alertError.classList.remove("js-ativo-flex");
  } else {
    const pAlert = alertError.querySelector(".mensagem");
    let counter = 11;

    const updateTime = () => {
      counter--;
      if (counter === 0) {
        clearInterval(timeUpdate);
        location.reload();
      }
      pAlert.innerText = `Ocorreu um erro ao buscar algum dado na API. A página será atualizada em ${counter} segundos.`;
    };

    const timeUpdate = setInterval(updateTime, 1000);
  }
}
