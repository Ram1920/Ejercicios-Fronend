import CLIENT from "./modules/client.js"

// Crear la funcion main para consumir el recurso...
async function main() {
  const product_id = localStorage.getItem("product_id")
  const comics = await CLIENT.sendRequest("comics/"+product_id);
  console.log(comics);
}

main();