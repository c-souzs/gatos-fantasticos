export default function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero="numero"]');
  
    // Pega o valor do número com o innerText e calcula um valor para ser incrementado no setInterval. Após isso ele rodar o setInterval até que o valor incrementado seja maior ou igual ao valor obtido no innerText, nisso o valor do campo é voltado ao normal e finalizada a animação.
    const animaNumeros = () => {
      numeros.forEach((numero) => {
        const numeroValor = +numero.innerText;
        const add = Math.floor(numeroValor / 100);
        numero.innerText = 0;
        let contador = 0;
  
        const tempoAimacao = setInterval(() => {
          if (contador > numeroValor) {
            clearInterval(tempoAimacao);
            numero.innerText = numeroValor;
            contador = 0;
          } else {
            contador += add;
            numero.innerText = contador;
          }
        }, 25 * Math.floor(Math.random()));
      });
    };
  
    numeros.length ? animaNumeros() : "";
  }