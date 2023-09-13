console.log("running data...")

function traerDatos() {
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
  

traerDatos();