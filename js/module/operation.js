export default function operation() {
  const daysElement = document.querySelector("[data-funcionamento-dia]");
  const schedulesElment = document.querySelector("[data-funcionamento-hora");
  const date = new Date();

  const checkOperation = () => {
    const dataDays = daysElement.getAttribute('data-funcionamento-dia');
    const dataShedules = schedulesElment.getAttribute('data-funcionamento-hora');

    const arrayDays = dataDays.split(',').map(dia => Number(dia));
    const arraySchedules = dataShedules.split('|').map(horario => Number(horario));

    const dayActual = date.getDay();
    const schedulesActual = date.getHours();

    if(arrayDays.includes(dayActual)){
      daysElement.classList.add('aberto-funcionamento');

      if( arraySchedules[0] < schedulesActual && arraySchedules[1] > schedulesActual){
        schedulesElment.classList.add('aberto-funcionamento');  
      } else {
        schedulesElment.classList.add('fechado-funcionamento');  
      }
    } else {
      daysElement.classList.add('fechado-funcionamento');
      schedulesElment.classList.add('fechado-funcionamento');  
    }
  };

  daysElement !== null && schedulesElment !== null ? checkOperation() : "";
}
