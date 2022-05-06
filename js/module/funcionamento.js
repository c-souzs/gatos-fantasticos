export default function funcionamento() {
  const dia = document.querySelector("[data-funcionamento-dia]");
  const horario = document.querySelector("[data-funcionamento-hora");
  const data = new Date();

  // Verifica primeiro se o dia está aberto, se tiver é verificado se o horário está aberto. Caso o dia e/ou horário esteja fechado é mostrado ao usuário
  const checar = () => {
    const diaAtual = data.getDay().toString();
    const abertoDia = dia
      .getAttribute("data-funcionamento-dia")
      .split(",")
      .includes(diaAtual);

    if (!abertoDia) {
      dia.classList.add("fechado-funcionamento");
      return;
    }

    const horaAtual = data.getHours();
    const horaAbrir = +horario
      .getAttribute("data-funcionamento-hora")
      .split("|")[0];
    const horaFechar = +horario
      .getAttribute("data-funcionamento-hora")
      .split("|")[1];

    const abertoHorario = horaAtual >= horaAbrir && horaAtual <= horaFechar;

    if (abertoHorario) {
      dia.classList.add("aberto-funcionamento");
      horario.classList.add("aberto-funcionamento");
    } else {
      horario.classList.add("fechado-funcionamento");
    }
  };

  dia !== null && horario !== null ? checar() : "";
}
