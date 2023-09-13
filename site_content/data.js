console.log("running data...");

function getDatos() {
  console.log("fetch data...")
  fetch("http://localhost:8091/", { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
    });
}

function getCardDatos() {
  console.log("fetch data...")
  fetch("http://localhost:8091/card", { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
    });
}
  
getCardDatos();