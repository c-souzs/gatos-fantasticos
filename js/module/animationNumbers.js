export default function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero="numero"]');
  
    const animate = () => {
      numbers.forEach((number) => {
        const valueNumber = Number(number.innerText);
        const add = Math.floor(valueNumber / 100);
        number.innerText = 0;
        let counter = 0;
  
        const timeAnimate = setInterval(() => {
          if (counter > valueNumber) {
            clearInterval(timeAnimate);
            number.innerText = valueNumber;
            counter = 0;
          } else {
            counter += add;
            number.innerText = counter;
          }
        }, 25 * Math.floor(Math.random()));
      });
    };
  
    numbers.length ? animate() : "";
  }