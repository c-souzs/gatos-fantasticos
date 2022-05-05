import cliqueForaItem from "./clique-fora.js";

export default function menuDropDown() {
  const menuDropDown = document.querySelector('[data-drop-down="ativar"]');
  const menuDropDownLista = document.querySelector('[data-drop-down="lista"]');

  // Adiciona a classe ativa no pai do elemento onde o drop down está e chama a função que trata e executa o event bubble.
  const exibirDropDown = () => {
    menuDropDown.addEventListener("click", () => {
      menuDropDownLista.classList.add("js-ativo");
      const callBackDesativar = () =>
        menuDropDownLista.classList.remove("js-ativo");

      cliqueForaItem(menuDropDown, callBackDesativar);
    });
  };

  menuDropDown !== null && menuDropDownLista !== null ? exibirDropDown() : "";
}
