
export default function depoimentos(dImgs, dDepoimentos) {
  const container = document.querySelector('[data-depoimentos="container"]');

  let posicao = true;
    const htmlDepoimentos = dDepoimentos.reduce(
      (acumulador, depoimento, index) => {
        let html;
        if (posicao) {
          html = `<div class="depoimento ${
            posicao ? "depoimento-lr" : "depoimento-rl"
          }">
                <img src="${dImgs[index]}" alt="${index}">
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
                    <img src="${dImgs[index]}" alt="${index}">
                </div>`;
        }

        posicao = !posicao;
        return (acumulador += html);
      },
      ""
    );
    container.innerHTML = htmlDepoimentos;
}
