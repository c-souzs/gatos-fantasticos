import addEventLoadItem from "./loadItem.js";

export default function testimonys(dImgs, dTestimonys) {
  const container = document.querySelector('[data-depoimentos="container"]');

  let position = true;
  const htmlTestimonys = dTestimonys.reduce(
      (acc, testimony, index) => {
        let html;
        
        html = `<div class="depoimento ${
          position ? "depoimento-lr" : "depoimento-rl"
        }">
              <div class="container-skeleton container-image ${position ? '' : 'depoimento-item-last'}">
                <div class="anima-skeleton"></div>
                <img src="${dImgs[index]}" alt="${index}">
              </div>
              <div class="depoimento-text ${position ? '' : 'depoimento-item-frist'}">
                  <h3>${testimony.email.split("@")[0]}</h3>
                  <p>${testimony.body}</p>
              </div>
              </div>`;

        position = !position;
        return (acc += html);
      },
      ""
  );
  container.innerHTML = htmlTestimonys;

  const listImages = container.querySelectorAll('.depoimento .container-image img');
  addEventLoadItem(listImages);
  
}
