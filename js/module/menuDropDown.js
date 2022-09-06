import outSideClick from "./outSideClick.js";

export default function menuDropDown() {
  const item = document.querySelector('[data-drop-down="ativar"]');
  const itemList = document.querySelector('[data-drop-down="lista"]');

  const showItem = () => {
    item.addEventListener("click", () => {
      itemList.classList.add("js-ativo");
      const callBackDesativar = () =>
        itemList.classList.remove("js-ativo");

      outSideClick(item, callBackDesativar);
    });
  };

  item !== null && itemList !== null ? showItem() : "";
}
