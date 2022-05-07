import fecthApi from "./fetch-api.js";
import imagemApi from "./imagem-api.js";

export default function depoimentos() {
  const container = document.querySelector('[data-depoimentos="container"]');

  const buscarDepoimentos = async () => {
    const depoimentosImgs = [];

    const promiseDados = await fecthApi("https://jsonplaceholder.typicode.com/posts/1/comments");
    const dadosDepoimentos = promiseDados.responseJson;

    for (let i = 0; i < dadosDepoimentos.length; i++) {
        const img = await imagemApi();
        const imgUrl = img.responseJson[0].url;
        depoimentosImgs.push(imgUrl);
    }

    listarDepoimentos(dadosDepoimentos, depoimentosImgs);
  }

  const listarDepoimentos = (depoimentosArray, depoimentosImgs) => {
    let posicao = true;
    const htmlDepoimentos = depoimentosArray.reduce(
      (acumulador, depoimento, index) => {
        let html;
        if (posicao) {
          html = `<div class="depoimento ${
            posicao ? "depoimento-lr" : "depoimento-rl"
          }">
                <img src="${depoimentosImgs[index]}" alt="${index}">
                <div>
                    <h3>${depoimento.email.split("@")[0]}</h3>
                    <p>${depoimento.body}</p>
                </div>
                </div>`;
        } else {
          html = `<div class="depoimento ${
            posicao ? "depoimento-lr" : "depoimento-rl"
          }">
                <div>
                    <h3>${depoimento.email.split("@")[0]}</h3>
                    <p>${depoimento.body}</p>
                    </div>
                    <img src="${depoimentosImgs[index]}" alt="${index}">
                </div>`;
        }

        posicao = !posicao;
        return (acumulador += html);
      },
      ""
    );
    container.innerHTML = htmlDepoimentos;
  }

  buscarDepoimentos();
}
