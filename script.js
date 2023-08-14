const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("Ingrese el nombre de la tarjeta");
  alert(`Taejeta ${name} creada satisfactoriamente`);
};
