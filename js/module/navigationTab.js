export default function navigationTab() {
    const imgs = document.querySelectorAll(
      '[data-navegacao-tab="imgs"] > li img'
    );
    const descriptions = document.querySelectorAll(
      '[data-navegacao-tab="descricoes"] .descricao'
    );
    const events = ["click", "touchstart"];
          
    const changedDescription = (i) => {
      descriptions.forEach((description) => description.classList.remove("js-ativo"));
      const animation = descriptions[i].getAttribute("data-navegacao-tab");
      descriptions[i].classList.add("js-ativo", animation);
    };
  
    const navigation = () => {
      descriptions[0].classList.add("js-ativo");
  
      imgs.forEach((img, index) => {
        events.forEach((e) =>
          img.addEventListener(e, () => changedDescription(index))
        );
      });
    };
  
    imgs.length && descriptions.length ? navigation() : "";
  }
  