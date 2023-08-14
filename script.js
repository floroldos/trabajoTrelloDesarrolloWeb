const buttonA = document.querySelector("#button_A");

hacerAlerta : buttonA.onclick = () => {
  const name = prompt("Ingrese el nombre de la tarjeta");
  const description = prompt("Ingrese la descripción de la tarjeta");

  alert(`Taejeta ${name} creada satisfactoriamente.`);
  crearTarjeta(name, description);
}
function crearTarjeta (nombreTarjeta, descripcionTarjeta){
  let tarjeta = [" "]
  card += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"> ${nombreTarjeta} </h5>
    <p class="card-text">${descripcionTarjeta}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
const panel = document.getElementById("panel");
panel.innerHTML = card;
}

const pannel = document.getElementById("panel");
pannel.innerHTML = card;
